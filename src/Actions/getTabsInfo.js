// @ts-nocheck

import { http } from '@Utils/apiCaching';

const getTabsInfo = async (url) => {
  return http()
    .then(async (api) => {
      const response = await api.get(url);
      return response.data;
    })
    .catch(() => getTabsInfo(url));
};

export { getTabsInfo };
