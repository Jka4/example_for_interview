import axios from 'axios';

const getTabsInfo = async (url) => {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch(() => getTabsInfo(url));
};

export { getTabsInfo };
