"use client";

import { useEffect, useRef, useState } from 'react';
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
    visual: 'cutout',
    services: ['Implante', 'Prótese fixa', 'Prótese móvel', 'Cirurgia oral menor', 'Estética', 'Facetas'],
  },
  {
    id: 'isadora-carvalho',
    name: 'Dra. Isadora Carvalho',
    role: 'Especialista em Endodontia',
    registry: 'CRO-PE 16049',
    image: '/dentistry/isadora-carvalho.webp',
    visual: 'photo',
    services: ['Atendimento especializado em Endodontia'],
  },
  {
    id: 'vinicius-belfort',
    name: 'Dr. Vinícius Belfort',
    role: 'Cirurgião-dentista · Clínico geral',
    registry: 'CRO-PE 21.675',
    image: '/dentistry/vinicius-belfort.webp',
    visual: 'photo',
    services: ['Restaurações estéticas em resina', 'Tratamento dessensibilizante', 'Clareamento dentário', 'Revitalização de esmalte', 'Gengivoplastia', 'Profilaxia, limpeza e aplicação de flúor'],
  },
] as const;

export function DentistrySection(){
  const sectionRef=useRef<HTMLElement>(null);
  const [active,setActive]=useState(0);

  useEffect(()=>{
    const section=sectionRef.current;
    if(!section)return;
    const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame=0;
    const update=()=>{
      frame=0;
      if(window.matchMedia('(max-width: 700px)').matches||reducedMotion.matches){section.style.setProperty('--dentistry-progress','1');return}
      const box=section.getBoundingClientRect();
      const distance=Math.max(section.offsetHeight-window.innerHeight,1);
      const progress=Math.min(1,Math.max(0,-box.top/distance));
      const next=Math.min(dentists.length-1,Math.floor(progress*dentists.length));
      section.style.setProperty('--dentistry-progress',String(progress));
      setActive(current=>current===next?current:next);
    };
    const requestUpdate=()=>{if(!frame)frame=requestAnimationFrame(update)};
    update();
    window.addEventListener('scroll',requestUpdate,{passive:true});
    window.addEventListener('resize',requestUpdate);
    reducedMotion.addEventListener('change',requestUpdate);
    return()=>{window.removeEventListener('scroll',requestUpdate);window.removeEventListener('resize',requestUpdate);reducedMotion.removeEventListener('change',requestUpdate);if(frame)cancelAnimationFrame(frame)};
  },[]);

  const showDentist=(index:number)=>{
    const section=sectionRef.current;
    if(!section)return;
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile=window.matchMedia('(max-width: 700px)').matches;
    if(mobile||reduced){document.getElementById(`dentist-${dentists[index].id}`)?.scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'});return}
    const distance=Math.max(section.offsetHeight-window.innerHeight,1);
    window.scrollTo({top:section.offsetTop+distance*((index+.12)/dentists.length),behavior:'smooth'});
  };

  return <section className="dentistry" id="odontologia" ref={sectionRef} aria-labelledby="dentistry-title">
    <div className="dentistry-stage">
      <header className="dentistry-heading">
        <span>03 / ODONTOLOGIA</span>
        <h2 id="dentistry-title">Precisão no cuidado.<br/><em>Confiança no sorriso.</em></h2>
        <p>Conheça a equipe de odontologia da Clínica São Lucas.</p>
      </header>
      <div className="dentistry-scenes">
        {dentists.map((dentist,index)=><article id={`dentist-${dentist.id}`} className={`dentistry-profile dentistry-${dentist.visual}${index===active?' is-active':''}`} key={dentist.id}>
          <div className="dentistry-portrait">
            <span className="dentistry-index" aria-hidden="true">0{index+1}</span>
            <img src={assetUrl(dentist.image)} alt={dentist.name} width="1080" height="1350" loading="lazy" decoding="async"/>
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
      <nav className="dentistry-nav" aria-label="Selecionar dentista">
        <span className="dentistry-rail"><i/></span>
        {dentists.map((dentist,index)=><button type="button" className={index===active?'is-active':''} aria-current={index===active?'true':undefined} onClick={()=>showDentist(index)} key={dentist.id}><span>0{index+1}</span>{dentist.name.replace(/^Dr(a)?\.\s/,'')}</button>)}
      </nav>
    </div>
  </section>;
}
