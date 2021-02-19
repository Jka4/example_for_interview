// @ts-nocheck

import { SWAPI } from '@Actions/SWAPI_wrapper';

const setFavoritesList = (favorites) => {
  return (dispatch) => {
    favorites.forEach((id) => {
      return SWAPI.getPerson(id, (data) => {
        dispatch({ type: 'SET_FAVORITES_LIST', payload: data });
      });
    });
  };
};

export { setFavoritesList };
