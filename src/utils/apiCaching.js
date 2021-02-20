import { version, name } from '../../package.json';

import localforage from 'localforage';
import memoryDriver from 'localforage-memoryStorageDriver';
import { setup } from 'axios-cache-adapter';

async function http() {
  await localforage.defineDriver(memoryDriver);

  const forageStore = localforage.createInstance({
    driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE, memoryDriver._driver],
    name: `${name}_${version}_`,
  });

  return setup({
    baseURL: 'https://swapi.dev/api/',
    cache: {
      maxAge: 15 * 60 * 1000,
      store: forageStore,
      exclude: { query: false },
    },
  });
}

export { http };
