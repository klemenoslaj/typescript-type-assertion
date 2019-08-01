import { Test } from 'generated/types';

type DType = NonNullable<Test['d']>;
export type Model = Pick<DType, keyof Exclude<DType, '__private'>>;
