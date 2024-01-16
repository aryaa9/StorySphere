// Home.js

import React from 'react';
import '../App.css';


export default function Home() {
  return (
    <div>

      <div className="post">
        <div className="image">
          <img
            src="https://i.redd.it/scary-hours-3-wallpaper-v0-p8gw2wwy211c1.jpg?width=3818&format=pjpg&auto=webp&s=9cbf921dc3b70aa2a8e7f59fd0bd9b89ad7ee033"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>Drake Is At His Best When Responding To Criticism With Bars</h2>
          <p className="info">
            <a className="author">Aryaman Singh</a>
            <time>2023-12-24 23:19</time>
          </p>
          <p className="summary">
            Every Scary Hours collection proves that Drake’s best responses are
            by way of bars. The first EP, which came out in 2018 and included
            “Diplomatic Immunity” and “God's Plan,” delivered his second most
            streamed song of all-time with the latter and further solidified his
            hit-making ability.
          </p>
        </div>
      </div>
    </div>
  );
}
