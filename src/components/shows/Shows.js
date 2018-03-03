import React from 'react'

import banner from '../../assets/amex_banner_small.png'

import ShowListItem from './ShowListItem'

const shows = [
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