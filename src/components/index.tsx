// NEW - Lazy exports
import { lazy } from 'react';
export const WordJumble = lazy(async () => ({ default: (await import('./WordJumble')).default}));
export const DisplayDecks = lazy(async () => ({ default: (await import('./DisplayDecks')).default}));

// OLD - Index imports
// export {default as DisplayDecks} from './DisplayDecks'
// export {default as WordJumble} from './WordJumble'