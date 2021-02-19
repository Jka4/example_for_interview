// @ts-nocheck

import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import PropTypes, { checkPropTypes } from 'prop-types';

import axios from 'axios';
import uniqBy from 'lodash.uniqby';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

const TabsPanel = () => {
  let detailedPage = useSelector((state) => state.detailedPage);

  const myPropTypes = { detailedPage: PropTypes.object };
  checkPropTypes(myPropTypes, { detailedPage });

  const { films, starships, species } = detailedPage;

  const tabsConfig = [
    { name: 'Films', children: TabContent, data: films, isDisabled: films?.length === 0 },
    { name: 'Starships', children: TabContent, data: starships, isDisabled: starships?.length === 0 },
    { name: 'Species', children: TabContent, data: species, isDisabled: species?.length === 0 },
  ];

  return (
    <div className="tabs">
      <Tabs>
        <TabList>
          {tabsConfig.map((el) => (
            <Tab key={el.name} disabled={el.isDisabled}>
              {el.name}
            </Tab>
          ))}
        </TabList>

        {tabsConfig.map((el) => (
          <TabPanel key={el.name}>{el.children(el.data, el.name)}</TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

const TabContent = (urls, tabName) => {
  let [list, setList] = useState([]);

  const fetchTabsInfo = (url) => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setList((list) => uniqBy([...list, data], 'title'));
      })
      .catch(() => {
        fetchTabsInfo(url);
      });
  };

  useEffect(() => {
    if (list.length === 0) {
      urls?.forEach((el) => fetchTabsInfo(el));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urls]);

  const tabsDataFactory = () => {
    if (tabName === 'Films') {
      return list?.map((el) => (
        <div className="element" key={el.title}>
          <span className="title">Title: {el.title}</span>
          <span className="releaseDate">Release date: {el.release_date}</span>
        </div>
      ));
    }
    if (tabName === 'Starships') {
      return list?.map((el) => (
        <div className="element" key={el.name}>
          {el.name}
        </div>
      ));
    }
    if (tabName === 'Species') {
      const info = list[0];

      return (
        <div key={info?.name}>
          <div className="element"> Name: {info?.name || 'n/a'} </div>
          <div className="element"> Average lifespan: {info?.average_lifespan || 'n/a'} </div>
          <div className="element"> Classification: {info?.classification || 'n/a'} </div>
          <div className="element"> Homeworld: {info?.homeworld || 'n/a'} </div>
          <div className="element"> Language: {info?.language || 'n/a'} </div>
        </div>
      );
    }
  };

  return <div className="tabsContent">{tabsDataFactory()}</div>;
};

export default TabsPanel;
