"use client";

import { useEffect, useRef } from 'react';
import { assetUrl } from './asset-url';
import { Icon } from './Icon';
import './dentistry.css';

const dentists = [
  {
    id: 'luiz-eneas',
    name: 'Dr. Luiz Enéas',
    role: 'Cirurgião-dentista · Especialista em Implantodontia',
    registry: 'CRO-PE 6272',
    image: '/dentistry/luiz-eneas.webp',
    width: 920,
    height: 1227,
    services: ['Implante', 'Prótese fixa', 'Prótese móvel', 'Cirurgia oral menor', 'Estética', 'Facetas'],
  },
  {
    id: 'isadora-carvalho',
    name: 'Dra. Isadora Carvalho',
    role: 'Especialista em Endodontia',
    registry: 'CRO-PE 16049',
    image: '/dentistry/isadora-carvalho.webp',
    width: 1166,
    height: 1349,
    services: ['Atendimento especializado em Endodontia'],
  },
  {
    id: 'vinicius-belfort',
    name: 'Dr. Vinícius Belfort',
    role: 'Cirurgião-dentista · Clínico geral',
    registry: 'CRO-PE 21.675',
    image: '/dentistry/vinicius-belfort.webp',
    width: 1024,
    height: 1536,
    services: ['Restaurações estéticas em resina', 'Tratamento dessensibilizante', 'Clareamento dentário', 'Revitalização de esmalte', 'Gengivoplastia', 'Profilaxia, limpeza e aplicação de flúor'],
  },
] as const;

export function DentistrySection(){
  const sectionRef=useRef<HTMLElement>(null);

  useEffect(()=>{
    const section=sectionRef.current;
    if(!section)return;
    const profiles=Array.from(section.querySelectorAll<HTMLElement>('.dentistry-profile'));
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
    if(reduced.matches){profiles.forEach(profile=>profile.classList.add('is-visible'));return}
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}
    }),{threshold:.18,rootMargin:'0px 0px -8% 0px'});
    profiles.forEach(profile=>observer.observe(profile));
    return()=>observer.disconnect();
  },[]);

  return <section className="dentistry" id="odontologia" ref={sectionRef} aria-labelledby="dentistry-title">
    <header className="dentistry-heading">
      <div>
        <span>03 / ODONTOLOGIA</span>
        <h2 id="dentistry-title">Precisão no cuidado.<br/><em>Confiança no sorriso.</em></h2>
      </div>
      <div className="dentistry-intro-copy">
        <p>Conheça a equipe de odontologia da Clínica São Lucas.</p>
        <nav aria-label="Ir para o perfil de um dentista">
          {dentists.map((dentist,index)=><a href={`#dentist-${dentist.id}`} key={dentist.id}><span>0{index+1}</span>{dentist.name.replace(/^Dr(a)?\.\s/,'')}</a>)}
        </nav>
      </div>
    </header>

    <div className="dentistry-list">
      {dentists.map((dentist,index)=><article id={`dentist-${dentist.id}`} className="dentistry-profile" key={dentist.id}>
        <div className="dentistry-portrait">
          <span className="dentistry-index" aria-hidden="true">0{index+1}</span>
          <span className="dentistry-orbit" aria-hidden="true"/>
          <img src={assetUrl(dentist.image)} alt={dentist.name} width={dentist.width} height={dentist.height} loading="lazy" decoding="async"/>
        </div>
        <div className="dentistry-copy">
          <span className="dentistry-registry">{dentist.registry}</span>
          <h3>{dentist.name}</h3>
          <p>{dentist.role}</p>
          <ul>{dentist.services.map(service=><li key={service}>{service}</li>)}</ul>
          <a href="https://api.whatsapp.com/send?phone=5587999156764" target="_blank" rel="noopener noreferrer">Agendar consulta <Icon name="arrow-up-right"/></a>
        </div>
      </article>)}
    </div>
  </section>;
}
