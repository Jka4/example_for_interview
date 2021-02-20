// @ts-nocheck

import { swapi } from '@Utils/swapi';

const setFavoritesList = (favorites) => {
  return (dispatch) => {
    favorites.forEach((id) => {
      return swapi.getPerson(id, (data) => {
        dispatch({ type: 'SET_FAVORITES_LIST', payload: data });
      });
    });
  };
};

export { setFavoritesList };
