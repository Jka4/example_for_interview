import React from 'react';

import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';

import './styles/styles.scss';

const HeaderLine = () => {
  const linksActiveStyle = { color: 'orange' };

  const linksConfig = [
    { url: '/favorites-list', name: 'Favorites list' },
    { url: '/people-list', name: 'People list' },
  ];

  return (
    <>
      <AppBar className="header">
        <div className="headerInner">
          <NavLink to="/">
            <img
              className="logotype"
              src="https://seeklogo.com/images/S/star-wars-logo-886FACEAFF-seeklogo.com.png"
              alt=""
            />
          </NavLink>

          <div className="headerLinks">
            {linksConfig.map((el) => (
              <NavLink to={el.url} key={el.url} activeStyle={linksActiveStyle}>
                <span>{el.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </AppBar>
    </>
  );
};

export default HeaderLine;
