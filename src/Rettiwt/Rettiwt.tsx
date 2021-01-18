import React from 'react';
import NavBar from '../NavBar';
import Header from '../Header';
import Feed from '../Feed';
import './index.css';

const Rettiwt = () =>
  <div className="rettiwt">
    <Header />
    <div className="rettiwt__content">
      <NavBar navType="routes" />
      <Feed />
      <NavBar navType='seemore' />
    </div>
  </div>

export default Rettiwt;
