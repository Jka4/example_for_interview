import axios from 'axios';

function getHeroesPage(pageNumber) {
  return (dispatch) => {
    dispatch({ type: 'PAGE_IS_FETCHING', payload: true });

    const URL = `https://swapi.dev/api/people/?page=${pageNumber}/`;

    return axios
      .get(URL)
      .then((response) => {
        const heroes = response.data.results;

        dispatch({ type: 'GET_PAGE_HEROES', payload: heroes });
        dispatch({ type: 'SET_HEROES_LIST_CURRENT_PAGE', payload: pageNumber });
        dispatch({ type: 'PAGE_IS_FETCHING', payload: false });
      })
      .catch((err) => {
        console.log('err: ', err);
        // getHeroesPage(pageNumber);
      });
  };
}

export { getHeroesPage };
