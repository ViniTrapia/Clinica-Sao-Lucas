"use client";

import { useEffect, useRef, useState } from 'react';
import { assetUrl } from './asset-url';
import { heroCampaigns } from './hero-campaigns';
import { Icon } from './Icon';
import './hero-campaigns.css';

const campaignInterval = 7000;

export function HeroCampaigns(){
  const campaignsRef=useRef<HTMLDivElement>(null);
  const [active,setActive]=useState(0);
  const [entered,setEntered]=useState(false);
  const [paused,setPaused]=useState(false);

  useEffect(()=>{
    if(!heroCampaigns.length)return;
    const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobile=window.matchMedia('(max-width: 700px)').matches;
    const entrance=window.setTimeout(()=>setEntered(true),reducedMotion.matches||mobile?0:900);
    return()=>window.clearTimeout(entrance);
  },[]);

  useEffect(()=>{
    if(heroCampaigns.length<2||paused)return;
    const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
    if(reducedMotion.matches)return;
    const rotation=window.setInterval(()=>setActive(current=>(current+1)%heroCampaigns.length),campaignInterval);
    return()=>window.clearInterval(rotation);
  },[active,paused]);

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
  },[]);

  if(!heroCampaigns.length)return null;

  return <div ref={campaignsRef} className={`hero-campaigns${entered?' is-entered':''}`} aria-label="Destaques da Clínica São Lucas" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocusCapture={()=>setPaused(true)} onBlurCapture={()=>setPaused(false)}>
    <div className="hero-campaign-track" aria-live="polite">
      {heroCampaigns.map((campaign,index)=><article className={`hero-campaign hero-campaign-${campaign.visual??'photo'}${index===active?' is-active':''}`} aria-hidden={index!==active} key={campaign.id}>
        <div className="hero-campaign-visual">
          <picture>
            {campaign.mobileImage&&<source media="(max-width: 700px)" srcSet={assetUrl(campaign.mobileImage)}/>}
            <img src={assetUrl(campaign.image)} alt={campaign.imageAlt} style={{objectPosition:campaign.imagePosition??'62% center'}} width="900" height="1350" loading={index===0?'eager':'lazy'} fetchPriority={index===0?'high':'low'} decoding="async"/>
          </picture>
          <div className="hero-campaign-shade" aria-hidden="true"/>
        </div>
        <div className="hero-campaign-copy">
          <span>{campaign.eyebrow}</span>
          <h2>{campaign.headline}</h2>
          <p>{campaign.schedule}</p>
          {campaign.href&&<a href={campaign.href} target="_blank" rel="noopener noreferrer" tabIndex={index===active?0:-1}>{campaign.linkLabel??'Saiba mais'} <Icon name="arrow-up-right"/></a>}
        </div>
      </article>)}
    </div>
    {heroCampaigns.length>1&&<div className="hero-campaign-nav" aria-label="Selecionar destaque">
      {heroCampaigns.map((campaign,index)=><button type="button" className={index===active?'is-active':''} aria-label={`Ver propaganda de ${campaign.professionalName}`} aria-current={index===active?'true':undefined} onClick={()=>setActive(index)} key={campaign.id}><span>{String(index+1).padStart(2,'0')}</span></button>)}
    </div>}
  </div>;
}
