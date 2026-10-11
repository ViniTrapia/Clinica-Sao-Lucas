import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import Home from './page';
import './globals.css';
// O build entrega a página já pronta no HTML (scripts/prerender.mjs); o React só a hidrata. No `pnpm dev` o #root vem vazio.
const root=document.getElementById('root')!;
if(root.hasChildNodes())hydrateRoot(root,<Home/>);else createRoot(root).render(<Home/>);
