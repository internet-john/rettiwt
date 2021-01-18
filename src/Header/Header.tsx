import React from 'react';

import TweetBox from '../TweetBox'

const Header = () =>
    <header className="header">
        <div>🦆</div>
        <TweetBox />
        <input type="search" className="global__search" />
    </header>

export default Header;