// @ts-nocheck

import React, { useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes, { checkPropTypes } from 'prop-types';

import { getHeroesPage } from '@Actions/getHeroesPage';
import { getIconByGender, getHeroId } from '../helpers/index';

import CircularProgress from '@material-ui/core/CircularProgress';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const Peoples = () => {
  let heroesList = useSelector((state) => state.heroesListPage);
  let pageIsFetching = useSelector((state) => state.pageIsFetching);
  let currentPage = useSelector((state) => state.heroesListCurrentPage);

  const myPropTypes = {
    heroesList: PropTypes.array,
    pageIsFetching: PropTypes.bool,
    currentPage: PropTypes.number,
  };

  checkPropTypes(myPropTypes, { heroesList, pageIsFetching, currentPage });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroesPage(currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const increment = () => {
    if (currentPage < 9) {
      dispatch(getHeroesPage(currentPage + 1));
    }
  };

  const decrement = () => {
    if (currentPage > 0) {
      dispatch(getHeroesPage(currentPage - 1));
    }
  };

  return (
    <div className="peoples">
      <div className="paginationWrapper">
        {pageIsFetching && <CircularProgress />}

        <ButtonGroup variant="contained" color="primary">
          <Button onClick={decrement} disabled={currentPage <= 1}>
            Prev
          </Button>
          <Button onClick={increment} disabled={currentPage >= 9}>
            Next
          </Button>
        </ButtonGroup>

        <span>Current page: {currentPage}</span>
      </div>

      {heroesList.map((el) => (
        <NavLink to={`/detailedPage/${getHeroId(el.url)}`} key={el.name}>
          <div className="listElement">
            <div className="heroImage">{getIconByGender(el.gender)}</div>
            <span className="name">{el.name}</span>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Peoples;
