// @ts-nocheck

import { swapi } from '@Utils/swapi';

const getHeroesPage = (pageNumber) => {
  return async (dispatch) => {
    dispatch({ type: 'PAGE_IS_FETCHING', payload: true });

    return swapi.getPeople({ page: pageNumber }, (data) => {
      dispatch({ type: 'GET_PAGE_HEROES', payload: data.results });
      dispatch({ type: 'SET_HEROES_LIST_CURRENT_PAGE', payload: pageNumber });
      dispatch({ type: 'PAGE_IS_FETCHING', payload: false });
    });
  };
};

export { getHeroesPage };
