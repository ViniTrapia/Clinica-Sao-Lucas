"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type KeyboardEvent as ReactKeyboardEvent, type PointerEvent as ReactPointerEvent, type RefObject } from 'react';
import { createPortal } from 'react-dom';
import { assetUrl } from './asset-url';
import { Icon } from './Icon';
import './clinic-gallery.css';

const galleryImages = [
  { src: '/clinic-gallery/physiotherapy-room.webp', width: 1290, height: 709, alt: 'Sala de fisioterapia da Clínica São Lucas', title: 'Sala de fisioterapia', description: 'Conheça o ambiente destinado aos atendimentos de fisioterapia.', position: '50% center' },
  { src: '/clinic-gallery/endoscopy-room.webp', width: 1290, height: 716, alt: 'Sala de endoscopia da Clínica São Lucas', title: 'Sala de endoscopia', description: 'Conheça o ambiente destinado aos exames de endoscopia.', position: '54% center' },
  { src: '/clinic-gallery/dermatology-room.webp', width: 1290, height: 715, alt: 'Sala de dermatologia da Clínica São Lucas', title: 'Sala de dermatologia', description: 'Conheça o consultório dedicado aos atendimentos de dermatologia.', position: '58% center' },
  { src: '/clinic-gallery/pediatrics-room.webp', width: 1290, height: 733, alt: 'Sala de pediatria da Clínica São Lucas', title: 'Sala de pediatria', description: 'Conheça o espaço preparado para os atendimentos de pediatria.', position: '48% center' },
  { src: '/clinic-gallery/endocrinology-room.webp', width: 1600, height: 900, alt: 'Sala de endocrinologia da Clínica São Lucas', title: 'Sala de endocrinologia', description: 'Conheça o consultório destinado aos atendimentos de endocrinologia.', position: '58% center' },
  { src: '/clinic-gallery/swimming-class.webp', width: 1600, height: 900, alt: 'Piscina utilizada nas aulas de natação da Clínica São Lucas', title: 'Aula de natação', description: 'Conheça o espaço da clínica utilizado para as aulas de natação.', position: '52% center' },
];

const imageCount = galleryImages.length;
const formatIndex = (index: number) => String(index + 2).padStart(2, '0');
const focusableSelector = 'a[href],button:not([disabled]),video[controls],[tabindex]:not([tabindex="-1"])';

function keepFocusInside(event: KeyboardEvent, container: HTMLElement | null) {
  if (event.key !== 'Tab' || !container) return;
  const focusable = Array.from(container.querySelectorAll<HTMLElement>(focusableSelector)).filter(element => element.offsetParent !== null || element === document.activeElement);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (!container.contains(document.activeElement)) {
    event.preventDefault();
    first.focus();
  } else if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

export function ClinicGallery({ imageRef }: { imageRef: RefObject<HTMLImageElement | null> }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const activeRef = useRef<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const lightboxCloseRef = useRef<HTMLButtonElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);

  const closeLightbox = useCallback(() => {
    const index = activeRef.current;
    setActive(null);
    if (index !== null) requestAnimationFrame(() => cardRefs.current[index]?.focus());
  }, []);

  const step = useCallback((delta: 1 | -1) => {
    setDirection(delta);
    setActive(current => current === null ? current : (current + delta + imageCount) % imageCount);
  }, []);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    const handleKeys = (event: KeyboardEvent) => {
      if (activeRef.current !== null) {
        if (event.key === 'Escape') closeLightbox();
        else if (event.key === 'ArrowRight') step(1);
        else if (event.key === 'ArrowLeft') step(-1);
        else keepFocusInside(event, lightboxRef.current);
        return;
      }
      if (event.key === 'Escape') setOpen(false);
      else keepFocusInside(event, panelRef.current);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeys);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeys);
      setActive(null);
      trigger?.focus();
    };
  }, [open, closeLightbox, step]);

  useEffect(() => {
    activeRef.current = active;
    if (active === null) return;
    lightboxCloseRef.current?.focus({ preventScroll: true });
    [1, -1].forEach(delta => {
      const neighbour = new Image();
      neighbour.src = assetUrl(galleryImages[(active + delta + imageCount) % imageCount].src);
    });
  }, [active]);

  useEffect(() => {
    if (!open) return;
    const backdrop = backdropRef.current;
    const gallery = galleryRef.current;
    if (!backdrop || !gallery) return;
    const figures = Array.from(gallery.querySelectorAll<HTMLElement>('figure'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      figures.forEach(figure => figure.classList.add('is-in-view'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { root: backdrop, threshold: .12 });
    figures.forEach(figure => observer.observe(figure));
    return () => observer.disconnect();
  }, [open]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    swipeStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const start = swipeStart.current;
    swipeStart.current = null;
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      swiped.current = true;
      step(dx < 0 ? 1 : -1);
    }
  };

  const handleCardKey = (event: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    cardRefs.current[(index + (event.key === 'ArrowRight' ? 1 : -1) + imageCount) % imageCount]?.focus();
  };

  const current = active === null ? null : galleryImages[active];

  return <>
    <button ref={triggerRef} className="photo-placeholder clinic-front-photo clinic-gallery-trigger" type="button" aria-haspopup="dialog" aria-expanded={open} onClick={() => setOpen(true)}>
      <img ref={imageRef} src={assetUrl('/clinica-fachada-about.jpg')} alt="Fachada da Clínica São Lucas" width="1280" height="960" loading="lazy" decoding="async"/>
      <span className="clinic-gallery-invite">
        <strong>CLIQUE</strong>
        <small>PARA CONHECER</small>
        <Icon name="arrow-up-right"/>
      </span>
    </button>
    {open && createPortal(<div ref={backdropRef} className="clinic-panel-backdrop" role="presentation" onClick={() => setOpen(false)}>
      <section ref={panelRef} className="clinic-panel" role="dialog" aria-modal="true" aria-labelledby="clinic-panel-title" aria-hidden={active !== null || undefined} onClick={event => event.stopPropagation()}>
        <button ref={closeRef} className="clinic-panel-close" type="button" onClick={() => setOpen(false)} aria-label="Fechar apresentação da clínica">Fechar <span aria-hidden="true">×</span></button>
        <header className="clinic-panel-header">
          <span>01 / A CLÍNICA</span>
          <div>
            <h2 id="clinic-panel-title">Conheça a<br/><em>Clínica São Lucas.</em></h2>
          </div>
        </header>
        <div className="clinic-panel-feature">
          <span><b>01</b> Um olhar sobre nossos espaços</span>
          <video src={assetUrl('/clinic-gallery/clinic-tour.mp4')} poster={assetUrl('/clinic-gallery/clinic-tour-poster.webp')} muted autoPlay loop playsInline controls preload="none" aria-label="Vídeo dos espaços internos da Clínica São Lucas"/>
        </div>
        <div className="clinic-panel-gallery-intro">
          <span>{formatIndex(0)} — {formatIndex(imageCount - 1)} / ESPAÇOS</span>
          <p>Selecione um ambiente para ver a foto ampliada.</p>
        </div>
        <div ref={galleryRef} className="clinic-panel-gallery" role="list" aria-label="Galeria dos espaços da Clínica São Lucas">
          {galleryImages.map((item, index) => <figure key={item.src} role="listitem" style={{ '--gallery-order': index % 2 } as CSSProperties}>
            <button ref={element => { cardRefs.current[index] = element; }} className="clinic-panel-card" type="button" aria-haspopup="dialog" aria-label={`Ampliar foto: ${item.title}`} onClick={() => { setDirection(1); setActive(index); }} onKeyDown={event => handleCardKey(event, index)}>
              <span className="clinic-panel-card-media">
                <img src={assetUrl(item.src)} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 700px) 100vw, 45vw" loading="lazy" decoding="async" style={{ '--gallery-position': item.position } as CSSProperties}/>
                <span className="clinic-panel-card-zoom" aria-hidden="true"><Icon name="arrow-up-right"/></span>
              </span>
            </button>
            <figcaption><span>{formatIndex(index)} / ESPAÇOS</span><h3>{item.title}</h3><p>{item.description}</p></figcaption>
          </figure>)}
        </div>
        <footer className="clinic-panel-footer">
          <p>Clínica São Lucas · Belém de São Francisco</p>
          <a href="#contato" onClick={() => setOpen(false)}>Vamos conversar <Icon name="arrow-up-right"/></a>
        </footer>
      </section>
    </div>, document.body)}
    {open && current && active !== null && createPortal(<div ref={lightboxRef} className="clinic-lightbox" role="dialog" aria-modal="true" aria-label={`${current.title}, foto ${active + 1} de ${imageCount}`} onClick={event => {
        event.stopPropagation();
        if (swiped.current) swiped.current = false;
        else closeLightbox();
      }}>
        <div className="clinic-lightbox-bar" onClick={event => event.stopPropagation()}>
          <span className="clinic-lightbox-counter" aria-live="polite"><b>{String(active + 1).padStart(2, '0')}</b> / {String(imageCount).padStart(2, '0')}</span>
          <button ref={lightboxCloseRef} className="clinic-panel-close clinic-lightbox-close" type="button" onClick={closeLightbox} aria-label="Fechar foto ampliada">Fechar <span aria-hidden="true">×</span></button>
        </div>
        <div className="clinic-lightbox-stage" onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} onPointerCancel={() => { swipeStart.current = null; }}>
          <figure key={current.src} className={direction === 1 ? 'is-next' : 'is-prev'} onClick={event => {
            event.stopPropagation();
            swiped.current = false;
          }}>
            <img src={assetUrl(current.src)} alt={current.alt} width={current.width} height={current.height} decoding="async" draggable={false} style={{ maxWidth: `min(100%, ${current.width}px)` }}/>
            <figcaption><h3>{current.title}</h3><p>{current.description}</p></figcaption>
          </figure>
        </div>
        <button className="clinic-lightbox-nav is-prev" type="button" onClick={event => { event.stopPropagation(); step(-1); }} aria-label="Foto anterior"><Icon name="arrow-up"/></button>
        <button className="clinic-lightbox-nav is-next" type="button" onClick={event => { event.stopPropagation(); step(1); }} aria-label="Próxima foto"><Icon name="arrow-up"/></button>
        <div className="clinic-lightbox-dots" onClick={event => event.stopPropagation()}>
          {galleryImages.map((item, index) => <button key={item.src} type="button" className={index === active ? 'is-active' : undefined} aria-label={`Ver foto ${index + 1}: ${item.title}`} aria-current={index === active || undefined} onClick={() => { setDirection(index > active ? 1 : -1); setActive(index); }}/>)}
        </div>
      </div>, document.body)}
  </>;
}
