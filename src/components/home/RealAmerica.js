import React from 'react'
import realamerica_h from '../../assets/real_america_h.png'

const RealAmerica = () => (
  <div className="tc mh2-ns">
    <img className="" src={realamerica_h} alt="Real America Banner" />
    <h1 className="site-dark tc f2-ns">AMEX at the Philly Fringe Festival</h1>
    <p className="mh4-ns mh3 f3-ns">
      Welcome to 'Real America' - a land of micro aggressions and psycho
      impressions, where you better read the fine print to your freedom.
      American Express Comedy (AmEx) explores the bizarre nature of the nation's
      current state through a collection of absurd comedy sketches and Real
      issues. Take a glimpse at some social and historical themes of our great
      nation through a colored lens as this show redefines what it means to be a
      Real American." AmEx's style of unapologetically authentic and raw comedy
      will make you laugh, cringe, and think critically about your own biases
      and contributions to certain societal norms.
    </p>
    <div className="mh4-ns mh3 f3-ns tc">
      <ul className="mt1 list">
        <li>9/12 @ 8:30pm</li>
        <li>9/13 @ 8:30pm</li>
        <li>9/14 @ 8:30pm</li>
        <li>9/15 @ 5:00pm and 8:30pm</li>
      </ul>
      <a
        className="site-red link"
        href="https://fringearts.com/event/real-america"
      >
        Buy your tickets now!
      </a>
    </div>
  </div>
)

export default RealAmerica
