import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { prerender } from './scripts/prerender.mjs';
export default defineConfig({plugins:[react(),prerender()],build:{outDir:'dist'},server:{host:'127.0.0.1',port:5173,strictPort:true}});
