import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink:'#080b12', panel:'#101622', line:'#202a3a', blue:'#5b8cff', mint:'#75d6b3', soft:'#a7b1c5' }, boxShadow:{ glow:'0 0 45px rgba(91,140,255,.14)' } } }, plugins:[] };
export default config;
