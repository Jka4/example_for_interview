import { version, name } from '../../../package.json';

let cache = {};

const keyLiteral = `${name}_${version}_API_cache`;

const saveCache = (cache) => {
  const serializedState = JSON.stringify(cache);
  localStorage.setItem(keyLiteral, serializedState);
};

const loadCache = () => {
  try {
    const serializedState = localStorage.getItem(keyLiteral);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

if (loadCache() !== undefined && Object.keys(loadCache()).length !== 0) {
  cache = loadCache();
}

export { cache, saveCache };
