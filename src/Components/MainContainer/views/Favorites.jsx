import React, { useEffect } from 'react';
import { setFavoritesList } from '@Actions/setFavoritesList';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIconByGender, getHeroId } from '../helpers/index';

const Favorites = () => {
  let favorites = useSelector((state) => state).favorites;
  let favoritesList = useSelector((state) => state.favoritesList);

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
