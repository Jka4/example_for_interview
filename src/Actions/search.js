// @ts-nocheck

import { swapi } from '@Utils/swapi';

const search = (query) => {
  return (dispatch) => {
    if (query.length === 0) {
      return dispatch({ type: 'SET_SEARCH_RESULTS', payload: [] });
    }

    return swapi.getPeople({ search: query }, (data) => {
      dispatch({ type: 'SET_SEARCH_RESULTS', payload: data.results });
    });
  };
};

export { search };
