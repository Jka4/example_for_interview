// @ts-nocheck

import { http } from './apiCaching';

const swapi = (() => {
  const request = (url, cb) => {
    return http()
      .then(async (api) => {
        const response = await api.get(url);
        return response.data;
      })
      .then(async (data) => {
        if (typeof cb === 'function') {
          await cb(data);
        }
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const singularRequestGenerator = (path) => {
    return (id, cb) => {
      return request(path + '/' + id + '/', cb);
    };
  };

  const pluralRequestGenerator = (path) => {
    return function () {
      let queryObject = undefined;
      let cb = undefined;

      if (arguments.length > 1) {
        queryObject = arguments[0];
        cb = arguments[1];
      } else if (arguments[0]) {
        // If given exactly one argument
        if (typeof arguments[0] === 'function') {
          cb = arguments[0];
          queryObject = null;
        } else {
          cb = null;
          queryObject = arguments[0];
        }
      }

      if (queryObject) {
        let searchParams = new URLSearchParams();
        for (let key of Object.keys(queryObject)) {
          let value = queryObject[key];
          searchParams.append(key, value);
        }

        return request(path + '/?' + searchParams.toString(), cb);
      }

      return request(path + '/', cb);
    };
  };

  return {
    getPerson: singularRequestGenerator('people'),
    getPeople: pluralRequestGenerator('people'),
    getFilm: singularRequestGenerator('films'),
    getFilms: pluralRequestGenerator('films'),
    getPlanet: singularRequestGenerator('planets'),
    getPlanets: pluralRequestGenerator('planets'),
    getSpecies: singularRequestGenerator('species'),
    getAllSpecies: pluralRequestGenerator('species'),
    getStarship: singularRequestGenerator('starships'),
    getStarships: pluralRequestGenerator('starships'),
    getVehicle: singularRequestGenerator('vehicles'),
    getVehicles: pluralRequestGenerator('vehicles'),
  };
})();

export { swapi };
