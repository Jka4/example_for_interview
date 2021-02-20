// @ts-nocheck

import { configureStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';

import { ls } from '@Utils/localStorage';

import throttle from 'lodash.throttle';
import uniqBy from 'lodash.uniqby';

let defaultState = {
  heroesListPage: [],
  heroesListCurrentPage: 1,
  pageIsFetching: false,
  detailedPage: {},
  favorites: [],
  favoritesList: [],
};

function rootReducer(state = defaultState, action) {
  const payload = action.payload;

  switch (action.type) {
    case 'GET_PAGE_HEROES':
      return { ...state, heroesListPage: [...payload] };
    case 'PAGE_IS_FETCHING':
      return { ...state, pageIsFetching: payload };
    case 'SET_HEROES_LIST_CURRENT_PAGE':
      return { ...state, heroesListCurrentPage: payload };
    case 'SET_DETAILED_PAGE':
      return { ...state, detailedPage: payload };
    case 'ADD_TO_FAVORITES':
      return { ...state, favorites: payload };
    case 'SET_FAVORITES_LIST':
      return { ...state, favoritesList: uniqBy([...state.favoritesList, payload], 'name') };
    default:
      return state;
  }
}

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  // middlewares.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: ls.load('store'),
  middleware: middlewares,
});

store.subscribe(throttle(() => ls.save(store.getState(), 'store'), 1000));

export default store;
