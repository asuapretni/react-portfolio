import React, { Component } from 'react';
import moment from "moment";
import 'moment/locale/es';

import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from "./navigation/navigation-container";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer />
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>
        <div>{moment().format('LLLL')}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
