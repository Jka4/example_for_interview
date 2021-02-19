// @ts-nocheck

import { swapi } from '@Actions/utils/swapi';

const getDetailedPage = (id) => {
  return (dispatch) => {
    return swapi.getPerson(id, (data) => {
      dispatch({ type: 'SET_DETAILED_PAGE', payload: data });
    });
  };
};

export { getDetailedPage };
