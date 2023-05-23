import { decode } from 'js-base64';
import { Data } from './types';

export const decodeData = (base64: string): Data => JSON.parse(decode(base64));
