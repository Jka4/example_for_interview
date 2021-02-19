// @ts-nocheck

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes, { checkPropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

import Fuse from 'fuse.js';
import TextField from '@material-ui/core/TextField';

import { getIconByGender, getHeroId } from '../helpers/index';

let fuseOptions = {
  shouldSort: true,
  tokenize: true,
  matchAllTokens: false,
  findAllMatches: false,
  includeScore: true,
  includeMatches: true,
  threshold: 0.3,
  location: 0,
  distance: 10,
  maxPatternLength: 20,
  minMatchCharLength: 1,
  keys: ['name'],
};

const SideBar = () => {
  const [filtered, setFiltered] = useState([]);
  let heroesList = useSelector((state) => state.heroesListPage);

  const myPropTypes = { heroesList: PropTypes.array };
  checkPropTypes(myPropTypes, { heroesList });

  const handleInput = (e) => {
    const value = e.target.value;
    const fuse = new Fuse(heroesList, fuseOptions);
    const result = fuse.search(value);
    setFiltered(result);
  };

  // since this api does not have an url for searching,
  // then in this component
  // I made a search only on the current page (just for example)

  return (
    <>
      <div className="sideBar">
        <TextField
          id="outlined-basic"
          onChange={handleInput}
          label="Search by name"
          variant="outlined"
          autoComplete="off"
        />

        <div className="searchResults">
          {filtered.map((el) => (
            <NavLink to={`/detailedPage/${getHeroId(el.item.url)}`} key={el.item.name}>
              <div className="listElement">
                <div className="heroImage">{getIconByGender(el.item.gender)}</div>
                <span className="name">{el.item.name}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
