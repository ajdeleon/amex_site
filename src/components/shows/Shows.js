import React from 'react'

import ShowListItem from './ShowListItem'
import images from '../../assets'

const shows = [
  {
    imgSource: images.charmCity,
    alt: 'Charm City Comedy Project',
    showName: 'Charm City Comedy Project',
    showDate: '5/5/18',
    showTime: '10PM',
    location: (
      <a
        className="site-red link b dim"
        href="https://www.facebook.com/zissimosbar/"
      >
        Zissimos Bar
      </a>
    ),
    ticketLink: 'https://www.charmcitycomedyproject.com/festival',
  },
  {
    imgSource: images.smallBanner,
    alt: 'Family Business',
    showName: 'Family Business',
    showDate: '5/25/18',
    showTime: '10PM',
    location: 'Philly Improv Theater',
    ticketLink: 'https://www.phitcomedy.com/shows/',
  },
]

const Shows = () => {
  this.renderList = () => {
    return shows.map(show => {
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
