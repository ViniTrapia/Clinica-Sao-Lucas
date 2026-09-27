"use client";

import { useEffect, useState } from 'react';
import { assetUrl } from './asset-url';
import { heroCampaigns } from './hero-campaigns';
import { Icon } from './Icon';
import './hero-campaigns.css';

const campaignInterval = 7000;

export function HeroCampaigns(){
  const [active,setActive]=useState(0);
  const [entered,setEntered]=useState(false);
  const [paused,setPaused]=useState(false);

  useEffect(()=>{
    if(!heroCampaigns.length)return;
    const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
    const entrance=window.setTimeout(()=>setEntered(true),reducedMotion.matches?0:3600);
    return()=>window.clearTimeout(entrance);
  },[]);

  useEffect(()=>{
    if(heroCampaigns.length<2||paused)return;
    const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
    if(reducedMotion.matches)return;
    const rotation=window.setInterval(()=>setActive(current=>(current+1)%heroCampaigns.length),campaignInterval);
    return()=>window.clearInterval(rotation);
  },[paused]);

  if(!heroCampaigns.length)return null;

  return <div className={`hero-campaigns${entered?' is-entered':''}`} aria-label="Destaques da Clínica São Lucas" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)} onFocusCapture={()=>setPaused(true)} onBlurCapture={()=>setPaused(false)}>
    <div className="hero-campaign-track" aria-live="polite">
      {heroCampaigns.map((campaign,index)=><article className={`hero-campaign hero-campaign-${campaign.visual??'photo'}${index===active?' is-active':''}`} aria-hidden={index!==active} key={campaign.id}>
        <img src={assetUrl(campaign.image)} alt={campaign.imageAlt} style={{objectPosition:campaign.imagePosition??'62% center'}} width="1100" height="1400"/>
        <div className="hero-campaign-shade" aria-hidden="true"/>
        <div className="hero-campaign-copy">
          <span>{campaign.eyebrow}</span>
          <h2>{campaign.headline}</h2>
          <p>{campaign.schedule}</p>
          {campaign.href&&<a href={campaign.href}>{campaign.linkLabel??'Saiba mais'} <Icon name="arrow-up-right"/></a>}
        </div>
        <strong className="hero-campaign-name">{campaign.professionalName}</strong>
      </article>)}
    </div>
    {heroCampaigns.length>1&&<div className="hero-campaign-nav" aria-label="Selecionar destaque">
      {heroCampaigns.map((campaign,index)=><button type="button" className={index===active?'is-active':''} aria-label={`Ver propaganda de ${campaign.professionalName}`} aria-current={index===active?'true':undefined} onClick={()=>setActive(index)} key={campaign.id}><span>{String(index+1).padStart(2,'0')}</span></button>)}
    </div>}
  </div>;
}
