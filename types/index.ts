export type Skill='Reading'|'Listening'|'Writing'|'Speaking';
export type Score={skill:Skill; band:number; change:number};
export type PracticeQuestion={id:string; prompt:string; type:string; options?:string[]; answer:string};
export type VocabularyWord={word:string; definition:string; example:string; topic:string; saved?:boolean};
export type User={name:string; targetBand:number; streak:number; estimatedBand:number};
