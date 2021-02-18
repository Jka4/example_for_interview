import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale, faFemale, faCog } from '@fortawesome/free-solid-svg-icons';

const getIconByGender = (gender) => {
  if (gender === 'male') {
    return <FontAwesomeIcon icon={faMale} />;
  } else if (gender === 'female') {
    return <FontAwesomeIcon icon={faFemale} />;
  } else {
    return <FontAwesomeIcon icon={faCog} />;
  }
};

const getHeroId = (url) => {
  return parseInt(url.match(/\d+/));
};

export { getIconByGender, getHeroId };
