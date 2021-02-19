// @ts-nocheck

import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import PropTypes, { checkPropTypes } from 'prop-types';

import { setFavoritesList } from '@Actions/setFavoritesList';
import { getIconByGender, getHeroId } from '../helpers/index';

const Favorites = () => {
  let favorites = useSelector((state) => state).favorites;
  let favoritesList = useSelector((state) => state.favoritesList);

  const myPropTypes = {
    favorites: PropTypes.array,
    favoritesList: PropTypes.array,
  };

  checkPropTypes(myPropTypes, { favorites, favoritesList });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFavoritesList(favorites, favoritesList));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites]);
  return (
    <>
      {favoritesList.map((el) => (
        <NavLink to={`/detailedPage/${getHeroId(el.url)}`} key={el.name}>
          <div className="listElement">
            <div className="heroImage">{getIconByGender(el.gender)}</div>
            <span className="name">{el.name}</span>
          </div>
        </NavLink>
      ))}
    </>
  );
};

export default Favorites;
