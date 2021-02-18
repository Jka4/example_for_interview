import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { setFavorites } from '@Actions/setFavorites';
import { cleanUpDetailsPage } from '@Actions/cleanUpDetailsPage';

const About = ({ heroId }) => {
  let detailedPage = useSelector((state) => state.detailedPage);
  let favorites = useSelector((state) => state).favorites;
  let [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  const { name, mass, hair_color, skin_color, eye_color, birth_year, gender } = detailedPage;
  const mainFeatures = [
    { name: 'Height', key: mass },
    { name: 'Mass', key: mass },
    { name: 'Hair color', key: hair_color },
    { name: 'skin color', key: skin_color },
    { name: 'Eye color', key: eye_color },
    { name: 'Birth year', key: birth_year },
    { name: 'Gender', key: gender },
  ];

  const switchIcon = () => {
    if (isFavorite) return <StarIcon />;
    else return <StarBorderIcon />;
  };

  const handleClick = () => {
    dispatch(setFavorites(heroId, favorites));
  };

  useEffect(() => {
    // clean store if unmount
    return () => {
      dispatch(cleanUpDetailsPage());
    };
  }, [dispatch]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (favorites.includes(heroId)) setIsFavorite(true);
    else setIsFavorite(false);
  });

  return (
    <>
      <div className="about">
        <div className="line">
          <div className="name">{name}</div>

          <div className="favorite" onClick={handleClick}>
            {switchIcon()}
          </div>
        </div>

        {mainFeatures?.map((el) => (
          <div className="infoString" key={el.name}>
            {`${el.name}:`} <span className="value">{el.key || '-'}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
