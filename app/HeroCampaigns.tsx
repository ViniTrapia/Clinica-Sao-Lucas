"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import { assetUrl } from './asset-url';
import { heroCampaigns as allFixedCampaigns, isCampaignActive } from './hero-campaigns';
import { clinicToday, getHeroDoctorCampaigns } from './agenda/hero-doctors';
import { Icon } from './Icon';
import './hero-campaigns.css';

const campaignInterval = 7000;

export function HeroCampaigns(){
  const campaignsRef=useRef<HTMLDivElement>(null);
  const [active,setActive]=useState(0);
  const [entered,setEntered]=useState(false);
  const [paused,setPaused]=useState(false);
  const [today,setToday]=useState<string|null>(null);
  // Páginas diárias (app/agenda/hero-doctors.ts) somadas às campanhas fixas.
  // Campanhas com data vencida saem sozinhas; até saber a data de hoje, só as sem data aparecem.
  const fixedCampaigns=useMemo(()=>allFixedCampaigns.filter(campaign=>today?isCampaignActive(campaign,today):!campaign.date),[today]);
  const heroCampaigns=useMemo(()=>today?[...fixedCampaigns,...getHeroDoctorCampaigns(today,fixedCampaigns)]:fixedCampaigns,[today,fixedCampaigns]);
  const hasCampaigns=heroCampaigns.length>0;
  const current=heroCampaigns.length?active%heroCampaigns.length:0;

  useEffect(()=>{
    const refresh=()=>setToday(clinicToday());
    refresh();
    const clock=window.setInterval(refresh,60000);
    return()=>window.clearInterval(clock);
  },[]);

  useEffect(()=>{
    if(!heroCampaigns.length)return;
    const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobile=window.matchMedia('(max-width: 700px)').matches;
    const entrance=window.setTimeout(()=>setEntered(true),reducedMotion.matches||mobile?0:900);
    return()=>window.clearTimeout(entrance);
  },[heroCampaigns.length]);

  useEffect(()=>{
    if(heroCampaigns.length<2||paused)return;
    const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
    if(reducedMotion.matches)return;
    const rotation=window.setInterval(()=>setActive(current=>(current+1)%heroCampaigns.length),campaignInterval);
    return()=>window.clearInterval(rotation);
  },[active,paused,heroCampaigns.length]);

  useEffect(()=>{
    const campaigns=campaignsRef.current;
    const hero=campaigns?.closest<HTMLElement>('.hero-story');
    if(!campaigns||!hero)return;
    const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery=window.matchMedia('(max-width: 700px)');
    let frame=0;
    const update=()=>{
      frame=0;
      if(reducedMotion.matches||mobileQuery.matches){
        campaigns.style.setProperty('--campaign-copy-x','0px');
        campaigns.style.setProperty('--campaign-copy-y','0px');
        campaigns.style.setProperty('--campaign-portrait-scale','1');
        campaigns.style.setProperty('--campaign-portrait-open','0');
        return;
      }
      const box=hero.getBoundingClientRect();
      const distance=Math.max(hero.offsetHeight-window.innerHeight,1);
      const progress=Math.min(1,Math.max(0,-box.top/distance));
      const returnProgress=1-Math.pow(1-progress,3);
      const descentRaw=Math.min(1,Math.max(0,(progress-.72)/.28));
      const descentProgress=descentRaw*descentRaw*(3-2*descentRaw);
      const startX=-Math.min(window.innerWidth*.47,650);
      campaigns.style.setProperty('--campaign-copy-x',`${startX*(1-returnProgress)}px`);
      campaigns.style.setProperty('--campaign-copy-y',`${20*descentProgress}px`);
      campaigns.style.setProperty('--campaign-portrait-open',String(1-returnProgress));
      campaigns.style.setProperty('--campaign-portrait-scale',String(1+.08*(1-returnProgress)));
    };
    const requestUpdate=()=>{if(!frame)frame=requestAnimationFrame(update)};
    update();
    window.addEventListener('scroll',requestUpdate,{passive:true});
    window.addEventListener('resize',requestUpdate);
    reducedMotion.addEventListener('change',requestUpdate);
    mobileQuery.addEventListener('change',requestUpdate);
    return()=>{
      window.removeEventListener('scroll',requestUpdate);
      window.removeEventListener('resize',requestUpdate);
      reducedMotion.removeEventListener('change',requestUpdate);
      mobileQuery.removeEventListener('change',requestUpdate);
      if(frame)cancelAnimationFrame(frame);
    };
  },[hasCampaigns]);

  if(!heroCampaigns.length)return null;

  return <div ref={campaignsRef} className={`hero-campaigns${entered?' is-entered':''}`} aria-label="Destaques da Clínica São Lucas" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocusCapture={()=>setPaused(true)} onBlurCapture={()=>setPaused(false)}>
    <div className="hero-campaign-track" aria-live="polite">
      {heroCampaigns.map((campaign,index)=>{const [dateLabel,...contextParts]=campaign.eyebrow.split('·');const contextLabel=contextParts.join('·').trim();return <article className={`hero-campaign hero-campaign-${campaign.visual??'photo'}${campaign.mobileImage?'':' hero-campaign-flush'}${index===current?' is-active':''}`} aria-hidden={index!==current} key={campaign.id}>
        <div className="hero-campaign-visual">
          <picture>
            {campaign.mobileImage&&<source media="(max-width: 700px)" srcSet={assetUrl(campaign.mobileImage)}/>}
            <img src={assetUrl(campaign.image)} alt={campaign.imageAlt} style={campaign.visual==='portrait-cutout'&&!campaign.imagePosition?undefined:{objectPosition:campaign.imagePosition??'62% center'}} width="900" height="1350" loading={index===0?'eager':'lazy'} fetchPriority={index===0?'high':'low'} decoding="async"/>
          </picture>
          <div className="hero-campaign-shade" aria-hidden="true"/>
        </div>
        <div className="hero-campaign-copy">
          <span className="hero-campaign-date"><strong>{dateLabel.trim()}</strong>{contextLabel&&<small>{contextLabel}</small>}</span>
          <h2>{campaign.headline}</h2>
          <p>{campaign.schedule}</p>
          {campaign.href&&<a href={campaign.href} target="_blank" rel="noopener noreferrer" tabIndex={index===current?0:-1}>{campaign.linkLabel??'Saiba mais'} <Icon name="arrow-up-right"/></a>}
        </div>
      </article>})}
    </div>
    {heroCampaigns.length>1&&<div className="hero-campaign-nav" aria-label="Selecionar destaque">
      {heroCampaigns.map((campaign,index)=><button type="button" className={index===current?'is-active':''} aria-label={`Ver propaganda de ${campaign.professionalName}`} aria-current={index===current?'true':undefined} onClick={()=>setActive(index)} key={campaign.id}><span>{String(index+1).padStart(2,'0')}</span></button>)}
    </div>}
  </div>;
}
