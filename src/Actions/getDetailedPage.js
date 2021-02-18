import axios from 'axios';

function getDetailedPage(id) {
  return (dispatch) => {
    const URL = `https://swapi.dev/api/people/${id}`;

    return axios
      .get(URL)
      .then((response) => {
        const hero = response.data;

        dispatch({ type: 'SET_DETAILED_PAGE', payload: hero });
      })
      .catch((err) => {
        console.log('err: ', err);
        getDetailedPage(id);
      });
  };
}

export { getDetailedPage };
