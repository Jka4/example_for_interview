// @ts-nocheck

import { swapi } from '@Utils/swapi';

const search = (query) => {
  return (dispatch) => {
    return swapi.getPeople({ search: query }, (data) => {
      dispatch({ type: 'SET_SEARCH_RESULTS', payload: data.results });
    });
  };
};

export { search };
