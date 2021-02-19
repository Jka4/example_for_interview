// @ts-nocheck

import { SWAPI } from '@Actions/SWAPI_wrapper';

const getDetailedPage = (id) => {
  return (dispatch) => {
    return SWAPI.getPerson(id, (data) => {
      dispatch({ type: 'SET_DETAILED_PAGE', payload: data });
    });
  };
};

export { getDetailedPage };
