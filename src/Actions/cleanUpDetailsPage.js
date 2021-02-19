// @ts-nocheck

const cleanUpDetailsPage = () => {
  return (dispatch) => {
    dispatch({ type: 'SET_DETAILED_PAGE', payload: {} });
  };
};

export { cleanUpDetailsPage };
