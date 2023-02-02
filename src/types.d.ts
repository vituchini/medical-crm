import { Storage } from './utils/storage';

export {};

declare global {
  interface Window {
    token: string;
    storage: Storage;
  }
}
