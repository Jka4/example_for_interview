// @ts-nocheck

import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes, { checkPropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { getIconByGender, getHeroId } from '../helpers/index';
import { search } from '@Actions/search';

const SideBar = () => {
  let searchResults = useSelector((state) => state.searchResults);

  const myPropTypes = { searchResults: PropTypes.array };
  checkPropTypes(myPropTypes, { searchResults });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    const value = e.target.value;
    dispatch(search(value));
  };

  return (
    <>
      <div className="sideBar">
        <input type="text" className="searchInput" placeholder="Search by name" onChange={handleInput} />

        <div className="searchResults">
          {searchResults?.map((el) => (
            <NavLink to={`/detailedPage/${getHeroId(el.url)}`} key={el.name}>
              <div className="listElement">
                <div className="heroImage">{getIconByGender(el.gender)}</div>
                <span className="name">{el.name}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
