import React from 'react'

const Nav = () => {
  return (
    <nav className="pa3 pa4-ns bg-black-90">
      <a className="link dim white-80 b f2 tc db mb3 mb4-ns" href="#" title="Home">American Express Comedy</a>
      <div className="tc pb3 o-80">
        <a className="link dim site-red f6 f5-ns dib mr3" href="#" title="Home">Home</a>
        <a className="link dim site-red f6 f5-ns dib mr3" href="#" title="About">Shows</a>
        <a className="link dim site-red f6 f5-ns dib mr3" href="#" title="Store">Videos</a>
        <a className="link dim site-red f6 f5-ns dib" href="#" title="Contact">Members</a>
      </div>
    </nav>

    
  )
}

export default Nav