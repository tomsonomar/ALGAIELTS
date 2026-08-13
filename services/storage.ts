export function getTargetBand(){if(typeof window==='undefined')return 7.5;try{return Number(localStorage.getItem('alga-target-band'))||7.5}catch{return 7.5}}
export function setTargetBand(value:number){try{localStorage.setItem('alga-target-band',String(value))}catch{}}
