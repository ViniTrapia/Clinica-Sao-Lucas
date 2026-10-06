"use client";

import { useEffect, useRef, useState } from 'react';
import type { Professional } from './schedule';
import { assetUrl } from '../asset-url';
import { Icon } from '../Icon';
import './professional-panel.css';

const bookingLink = 'https://api.whatsapp.com/send?phone=5587999156764';

export type PanelPerson = Professional & { note?: string };
export type PanelDay = { weekday: string; label: string };

/**
 * Painel aberto ao clicar na foto de um profissional da agenda semanal.
 * Mostra área, apresentação e especialidades do cadastro permanente
 * (`agenda-professionals.ts`); nada aqui é específico de uma semana, exceto o
 * dia de atendimento e a observação da ocorrência (`note`).
 */
export function ProfessionalPanel({ person, day, onClose }: { person: PanelPerson | null; day: PanelDay | null; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const element = dialog.current;
    if (!element || !person) return;
    setClosing(false);
    if (!element.open) element.showModal();
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    return () => { root.style.overflow = previousOverflow; };
  }, [person]);

  const requestClose = () => {
    const element = dialog.current;
    if (!element?.open || closing) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) { element.close(); return; }
    setClosing(true);
    window.setTimeout(() => element.close(), 260);
  };

  if (!person) return <dialog ref={dialog} className="pro-panel" aria-label="Profissional" onClose={onClose}/>;

  const intro = person.summary ?? person.bio;
  const groups = person.specialties ?? [];
  const itemCount = groups.reduce((total, group) => total + group.items.length, 0);
  const titleId = `pro-panel-title-${person.id}`;
  let itemIndex = 0;

  return <dialog
    ref={dialog}
    className={'pro-panel' + (closing ? ' is-closing' : '')}
    aria-labelledby={titleId}
    onClose={onClose}
    onCancel={event => { event.preventDefault(); requestClose(); }}
    onClick={event => { if (event.target === event.currentTarget) requestClose(); }}
  >
    <div className="pro-panel-sheet" key={person.id}>
      <button type="button" className="pro-panel-close" onClick={requestClose} aria-label="Fechar painel"><span aria-hidden="true"/></button>
      <div className="pro-panel-portrait" aria-hidden="true">
        <span className="pro-panel-ring"/>
        {person.photo && <img src={assetUrl(person.photo)} alt="" decoding="async"/>}
        {day && <span className="pro-panel-day"><small>Atende</small>{day.weekday.charAt(0).toUpperCase() + day.weekday.slice(1)} · {day.label}</span>}
      </div>

      <div className="pro-panel-body">
        <div className="pro-panel-header">
          <span className="pro-panel-eyebrow">PROFISSIONAL · CLÍNICA SÃO LUCAS</span>
          <h3 id={titleId}>{person.name}{person.note && <span className="pro-panel-note"> ({person.note})</span>}</h3>
          {person.area && <p className="pro-panel-area">{person.area}</p>}
          {intro && <p className="pro-panel-intro">{intro}</p>}
        </div>

        {groups.length > 0 && <section className={'pro-panel-specialties' + (itemCount > 12 ? ' is-dense' : '')} aria-label="Especialidades e atendimentos">
          <span className="pro-panel-label">ESPECIALIDADES E ATENDIMENTOS</span>
          {groups.map((group, groupIndex) => <div className="pro-panel-group" key={groupIndex}>
            {group.title && <h4>{group.title}</h4>}
            <ul>{group.items.map(item => {
              const delay = Math.min(itemIndex++, 18) * 28;
              return <li key={item} style={{ animationDelay: `${180 + delay}ms` }}>{item}</li>;
            })}</ul>
          </div>)}
        </section>}

        <div className="pro-panel-footer">
          <a className="button" href={bookingLink} target="_blank" rel="noopener noreferrer">Agendar consulta <span><Icon name="arrow-up-right"/></span></a>
          <button type="button" className="pro-panel-back" onClick={requestClose}>Voltar à agenda</button>
        </div>
      </div>
    </div>
  </dialog>;
}
