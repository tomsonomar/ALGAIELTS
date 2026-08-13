import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'ALGA IELTS — IELTS Preparation Platform',description:'Focused IELTS preparation with practice, diagnostics and a clear next step.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
