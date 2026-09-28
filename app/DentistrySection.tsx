"use client";

import { useEffect, useRef, useState } from 'react';
import { assetUrl } from './asset-url';
import { Icon } from './Icon';
import './dentistry.css';

const dentists = [
  {
    id: 'luiz-eneas',
    name: 'Dr. Luiz Enéas',
    shortName: 'Luiz Enéas',
    role: 'Cirurgião-dentista · Especialista em Implantodontia',
    registry: 'CRO-PE 6272',
    image: '/dentistry/luiz-eneas.webp',
    width: 920,
    height: 1227,
    bio: 'Especialista em Implantodontia, com atendimento voltado à reabilitação oral por meio de implantes, próteses e procedimentos estéticos.',
    services: ['Implante', 'Prótese fixa', 'Prótese móvel', 'Cirurgia oral menor', 'Estética', 'Facetas'],
  },
  {
    id: 'isadora-carvalho',
    name: 'Dra. Isadora Carvalho',
    shortName: 'Isadora Carvalho',
    role: 'Especialista em Endodontia',
    registry: 'CRO-PE 16049',
    image: '/dentistry/isadora-carvalho.webp',
    width: 1166,
    height: 1349,
    bio: 'Atendimento especializado em Endodontia, área dedicada ao diagnóstico e tratamento da parte interna dos dentes e à preservação do sorriso.',
    services: ['Atendimento especializado em Endodontia'],
  },
  {
    id: 'vinicius-belfort',
    name: 'Dr. Vinícius Belfort',
    shortName: 'Vinícius Belfort',
    role: 'Cirurgião-dentista · Clínico geral',
    registry: 'CRO-PE 21.675',
    image: '/dentistry/vinicius-belfort.webp',
    width: 1024,
    height: 1536,
    bio: 'Clínico geral com atendimento em prevenção e estética dental, reunindo limpeza, clareamento e restaurações em um cuidado próximo.',
    services: ['Restaurações estéticas em resina', 'Tratamento dessensibilizante', 'Clareamento dentário', 'Revitalização de esmalte', 'Gengivoplastia', 'Profilaxia, limpeza e aplicação de flúor'],
  },
] as const;

export function DentistrySection(){
  const [active,setActive]=useState(0);
  const teamRef=useRef<HTMLDivElement>(null);
  const dentist=dentists[active];

  useEffect(()=>{
    const team=teamRef.current;
    if(!team)return;
    const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame=0;

    const update=()=>{
      frame=0;
      if(reducedMotion.matches){
        team.style.setProperty('--mouth-open','1');
        return;
      }
      const rect=team.getBoundingClientRect();
      const start=window.innerHeight*.92;
      const end=window.innerHeight*.4;
      const progress=Math.min(1,Math.max(0,(start-rect.top)/(start-end)));
      team.style.setProperty('--mouth-open',progress.toFixed(3));
    };
    const requestUpdate=()=>{if(!frame)frame=window.requestAnimationFrame(update)};

    update();
    window.addEventListener('scroll',requestUpdate,{passive:true});
    window.addEventListener('resize',requestUpdate);
    reducedMotion.addEventListener('change',requestUpdate);
    return()=>{
      window.removeEventListener('scroll',requestUpdate);
      window.removeEventListener('resize',requestUpdate);
      reducedMotion.removeEventListener('change',requestUpdate);
      if(frame)window.cancelAnimationFrame(frame);
    };
  },[]);

  return <section className="dentistry" id="odontologia" aria-labelledby="dentistry-title">
    <header className="dentistry-heading">
      <span>ODONTOLOGIA · CLÍNICA SÃO LUCAS</span>
      <h2 id="dentistry-title">Equipe de odontologia.<br/><em>Confiança em cada sorriso.</em></h2>
      <p>Conheça nossos cirurgiões-dentistas. Selecione um profissional para ver sua apresentação, especialidade e atendimentos.</p>
    </header>

    <div className="dentistry-team" role="tablist" aria-label="Equipe de odontologia" ref={teamRef}>
      <span className="dentistry-mouth" aria-hidden="true">
        <svg viewBox="0 0 360 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="dentistry-gum-top" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#d98286"/>
              <stop offset="1" stopColor="#efb2ad"/>
            </linearGradient>
            <linearGradient id="dentistry-gum-bottom" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#d98286"/>
              <stop offset="1" stopColor="#efb2ad"/>
            </linearGradient>
            <linearGradient id="dentistry-tooth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#fff"/>
              <stop offset="1" stopColor="#e9eef3"/>
            </linearGradient>
          </defs>
          <g className="dentistry-jaw dentistry-jaw--top">
            <path d="M0 0H360V108C304 88 247 78 180 78S56 88 0 108Z" fill="url(#dentistry-gum-top)"/>
            {Array.from({length:9},(_,index)=><rect key={`top-${index}`} x={9+index*39} y="82" width="36" height="73" rx="8" fill="url(#dentistry-tooth)" stroke="#d8dee5" strokeWidth="1"/>)}
          </g>
          <g className="dentistry-jaw dentistry-jaw--bottom">
            <path d="M0 212C56 232 113 242 180 242s124-10 180-30v108H0Z" fill="url(#dentistry-gum-bottom)"/>
            {Array.from({length:9},(_,index)=><rect key={`bottom-${index}`} x={9+index*39} y="165" width="36" height="73" rx="8" fill="url(#dentistry-tooth)" stroke="#d8dee5" strokeWidth="1"/>)}
          </g>
        </svg>
      </span>
      {dentists.map((item,index)=><button
        type="button"
        role="tab"
        aria-selected={index===active}
        aria-controls="dentistry-detail"
        className={`dentistry-member dentistry-member--${item.id}${index===active?' is-active':''}`}
        onClick={()=>setActive(index)}
        key={item.id}
      >
        <span className="dentistry-member-portrait">
          <img src={assetUrl(item.image)} alt="" width={item.width} height={item.height} loading="lazy" decoding="async"/>
        </span>
        <span className="dentistry-member-name">{item.shortName}</span>
      </button>)}
    </div>

    <article className="dentistry-detail" id="dentistry-detail" role="tabpanel" aria-live="polite" key={dentist.id}>
      <div className="dentistry-detail-primary">
        <span className="dentistry-registry">{dentist.registry}</span>
        <h3>{dentist.name}</h3>
        <p className="dentistry-role">{dentist.role}</p>
        <p className="dentistry-bio">{dentist.bio}</p>
      </div>
      <div className="dentistry-detail-services">
        <span>ATENDIMENTOS</span>
        <ul>{dentist.services.map(service=><li key={service}>{service}</li>)}</ul>
        <a href="https://api.whatsapp.com/send?phone=5587999156764" target="_blank" rel="noopener noreferrer">Agendar consulta <Icon name="arrow-up-right"/></a>
      </div>
    </article>
  </section>;
}
