import React from 'react';

const TweetBox = () =>
    <section className="tweetbox">
        <ul className="tweetbox__btngroup">
            <li>pic</li>
            <li>gif</li>
            <li>poll</li>
            <li>emoji</li>
            <li>schedule</li>
        </ul>
        <button className="tweetbox__tweetbtn">Tweet</button>
    </section>

export default TweetBox;