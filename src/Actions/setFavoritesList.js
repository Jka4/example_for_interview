import axios from 'axios';

function setFavoritesList(favorites) {
  return (dispatch) => {
    favorites.forEach((id) => {
      const URL = `https://swapi.dev/api/people/${id}/`;

      return axios
        .get(URL)
        .then((response) => {
          const hero = response.data;
          dispatch({ type: 'SET_FAVORITES_LIST', payload: hero });
        })
        .catch((err) => {
          console.log('err: ', err);
        });
    });
  };
}

export { setFavoritesList };
