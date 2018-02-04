import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Colors from './Colors'
//import Nav from './Nav'
import Nav2 from './Nav2'
import Members from './members/Members'
import Media from './media/Media'


const App = () => {
  return (
  <div>
    <BrowserRouter>
      <React.Fragment>
        <Nav2 />
        <Route exact path="/colors" component={Colors} />
        <Route exact path="/members" component={Members} />
        <Route exact path="/media" component={Media} />
      </React.Fragment>
    </BrowserRouter>
  </div>)
}

export default App