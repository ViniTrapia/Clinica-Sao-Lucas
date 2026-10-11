import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Clínica São Lucas | Clínica médica e odontológica em Belém do São Francisco – PE',description:'Clínica médica e odontológica em Belém do São Francisco – PE: consultas com especialistas, odontologia e coleta de exames. Agende pelo WhatsApp (87) 99915-6764.',icons:{icon:'/favicon.svg'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
