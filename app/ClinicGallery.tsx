"use client";

import { useEffect, useRef, useState, type CSSProperties, type RefObject } from 'react';
import { createPortal } from 'react-dom';
import { assetUrl } from './asset-url';
import { Icon } from './Icon';
import './clinic-gallery.css';

const galleryImages = [
  { src: '/clinic-gallery/reception.webp', alt: 'Ambiente de recepção da Clínica São Lucas', title: 'Recepção', description: 'Um olhar para a recepção da Clínica São Lucas.' },
  { src: '/clinic-gallery/pediatric-space.webp', alt: 'Espaço infantil da Clínica São Lucas', title: 'Espaço infantil', description: 'Detalhes do espaço infantil da clínica.' },
  { src: '/clinic-gallery/consulting-room.webp', alt: 'Consultório da Clínica São Lucas', title: 'Consultório', description: 'Um dos consultórios que compõem os espaços da clínica.' },
  { src: '/clinic-gallery/corridor.webp', alt: 'Circulação interna da Clínica São Lucas', title: 'Circulação interna', description: 'O corredor que conecta os ambientes internos.' },
  { src: '/clinic-gallery/care-room.webp', alt: 'Sala de atendimento da Clínica São Lucas', title: 'Sala de atendimento', description: 'Um dos ambientes destinados aos atendimentos.' },
];

export function ClinicGallery({ imageRef }: { imageRef: RefObject<HTMLImageElement | null> }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
      trigger?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const backdrop = backdropRef.current;
    const gallery = galleryRef.current;
    if (!backdrop || !gallery) return;
    const figures = Array.from(gallery.querySelectorAll<HTMLElement>('figure'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) {
      figures.forEach(figure => figure.classList.add('is-in-view'));
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;
      figures.forEach(figure => {
        const box = figure.getBoundingClientRect();
        const centerDistance = (box.top + box.height / 2 - viewportHeight / 2) / viewportHeight;
        const pan = Math.max(-4, Math.min(4, centerDistance * -5));
        figure.style.setProperty('--gallery-pan', `${pan}%`);
      });
    };
    const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-in-view');
      });
    }, { root: backdrop, threshold: .18 });
    figures.forEach(figure => observer.observe(figure));
    update();
    backdrop.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    return () => {
      observer.disconnect();
      backdrop.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [open]);

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
      <section className="clinic-panel" role="dialog" aria-modal="true" aria-labelledby="clinic-panel-title" onClick={event => event.stopPropagation()}>
        <button ref={closeRef} className="clinic-panel-close" type="button" onClick={() => setOpen(false)} aria-label="Fechar apresentação da clínica">Fechar <span aria-hidden="true">×</span></button>
        <header className="clinic-panel-header">
          <span>01 / A CLÍNICA</span>
          <div>
            <h2 id="clinic-panel-title">Conheça a<br/><em>Clínica São Lucas.</em></h2>
          </div>
        </header>
        <div className="clinic-panel-feature">
          <video src={assetUrl('/clinic-gallery/clinic-tour.mp4')} poster={assetUrl('/clinic-gallery/consulting-room.webp')} muted autoPlay loop playsInline controls preload="metadata" aria-label="Vídeo dos espaços internos da Clínica São Lucas"/>
          <span><b>01</b> Um olhar sobre nossos espaços</span>
        </div>
        <div ref={galleryRef} className="clinic-panel-gallery" aria-label="Galeria dos espaços da Clínica São Lucas">
          {galleryImages.map((item, index) => <figure key={item.src} style={{ '--gallery-order': index } as CSSProperties}>
            <img src={assetUrl(item.src)} alt={item.alt} width="1600" height="1067" loading="lazy" decoding="async"/>
            <figcaption><span>{String(index + 2).padStart(2, '0')} / ESPAÇOS</span><h3>{item.title}</h3><p>{item.description}</p></figcaption>
          </figure>)}
        </div>
        <footer className="clinic-panel-footer">
          <p>Clínica São Lucas · Belém de São Francisco</p>
          <a href="#contato" onClick={() => setOpen(false)}>Vamos conversar <Icon name="arrow-up-right"/></a>
        </footer>
      </section>
    </div>, document.body)}
  </>;
}
