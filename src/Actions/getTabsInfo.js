// @ts-nocheck

import axios from 'axios';
import { ls } from '@Utils/localStorage';

const getTabsInfo = async (url) => {
  if (ls.cache[url] !== undefined) return ls.cache[url];

  return axios
    .get(url)
    .then((response) => {
      const data = response.data;
      ls.cache[url] = data;
      ls.save(ls.cache, 'API');

      return data;
    })
    .catch(() => getTabsInfo(url));
};

export { getTabsInfo };
