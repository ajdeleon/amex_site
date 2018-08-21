import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

//import Nav from './Nav'
import Nav2 from './Nav2'
import Home from './home/Home'
import Shows from './shows/Shows'
import Members from './members/Members'
import Media from './media/Media'
import Contact from './contact/Contact'
import Footer from './Footer'

const App = () => {
  return (
    <div className="flex-column">
      <BrowserRouter>
        <React.Fragment>
          <Nav2 />
          <Route exact path="/" component={Home} />
          <Route exact path="/shows" component={Shows} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/media" component={Media} />
          <Route exact path="/contact" component={Contact} />
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    </div>
  )
}

export default App
