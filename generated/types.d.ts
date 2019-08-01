export interface TypeD {
  da: string;
  db: string;
  dc: string;
}

export interface Test { 
  a: string;
  b: string;
  c: string;
  d?: { __private: 'd' } & TypeD;
  e: { __private: 'e' } & TypeD;
}