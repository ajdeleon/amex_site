import React from 'react'
import { Link } from 'react-router-dom'

import banner from '../assets/amex_banner.png'

const Nav2 = () => {
  return (
    <nav className="db dt-l w-100 border-box pa3 ph5-l">
      <a className="db dtc-l v-mid link w-30 w-10-l mb2 mb0-l pointer center" href="/" title="Home">
        <span><img src={banner} alt="AMEX Home"/></span>
      </a>
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <Link className="link dim site-red f6 f4-l dib mr3 mr4-l" to="/" title="Home">Home</Link>
        <Link className="link dim site-red f6 f4-l dib mr3 mr4-l" to="/shows" title="Shows">Shows</Link>
        <Link className="link dim site-red f6 f4-l dib mr3 mr4-l" to="/media" title="Media">Media</Link>
        <Link className="link dim site-red f6 f4-l dib mr3 mr4-l" to="/members" title="Members">Members</Link>
        <Link className="link dim site-red f6 f4-l dib" to="/contact" title="Contact">Contact</Link>
      </div>
  </nav>

  )
}

export default Nav2