// @ts-nocheck

import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getDetailedPage } from '@Actions/getDetailedPage';

import About from './views/About';
import PanelWithTabs from './views/PanelWithTabs';

import './styles/styles.scss';

const DetailedPage = () => {
  const currentHeroId = useLocation().pathname.split('/').pop();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailedPage(currentHeroId));
  }, [dispatch, currentHeroId]);

  return (
    <>
      <div className="DetailedPage">
        <div className="DetailedPage_inner">
          <About heroId={currentHeroId} />
          <PanelWithTabs />
        </div>
      </div>
    </>
  );
};

export default DetailedPage;
