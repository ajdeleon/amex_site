import React from 'react'

import litSketch from '../../assets/lit_march2_small.png'
import banner from '../../assets/amex_banner_small.png'

import ShowListItem from './ShowListItem'

const shows = [
  { imgSource: banner, alt: "Family Business", showName: "Family Business", showDate: "2/23/18 - 10PM", location: "Philly Improv Theater", ticketLink: "https://phitcomedy.ticketleap.com/family-business-featuring-american-express-02-23-2018/" },
  { imgSource: litSketch, alt: "Most Lit Sketch Show", showName: "The Most Lit Sketch Show in the Planet", showDate: "3/2/18 - 7PM", location: "Good Good Comedy Theater", ticketLink: "https://www.facebook.com/events/202499530487421/" },
  { imgSource: banner, alt: "Family Business", showName: "Family Business", showDate: "3/23/18 - 10PM", location: "Philly Improv Theater", ticketLink: "https://www.phitcomedy.com/shows/" },
  { imgSource: banner, alt: "Family Business", showName: "Family Business", showDate: "4/27/18 - 10PM", location: "Philly Improv Theater", ticketLink: "https://www.phitcomedy.com/shows/" },
  { imgSource: banner, alt: "Family Business", showName: "Family Business", showDate: "5/25/18 - 10PM", location: "Philly Improv Theater", ticketLink: "https://www.phitcomedy.com/shows/" },
]

const Shows = () => {
  this.renderList = () => {
    return shows.map((show) => {
      return <ShowListItem {...show} key={show.alt + show.showDate} />
    })
  }

  return (
    <ul className="list pl0 mt0 measure-wide mw7-l center">
      {this.renderList()}
    </ul>
  )
}

export default Shows