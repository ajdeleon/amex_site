import React from 'react'

import ShowListItem from './ShowListItem'
import images from '../../assets'

const shows = [
  {
    imgSource: images.smallBanner,
    alt: 'Family Business',
    showName: 'Family Business',
    showDate: '11/30/18',
    showTime: '10PM',
    location: 'Philly Improv Theater',
    ticketLink: 'https://www.phitcomedy.com/shows/',
  },
  {
    imgSource: images.smallBanner,
    alt: 'Family Business',
    showName: 'Family Business',
    showDate: '12/28/18',
    showTime: '10PM',
    location: 'Philly Improv Theater',
    ticketLink: 'https://www.phitcomedy.com/shows/',
  },
]

const Shows = () => {
  this.renderList = () => {
    return shows.map(show => {
      return (
        <ShowListItem
          {...show}
          key={show.alt + show.showDate + show.showTime}
        />
      )
    })
  }

  return (
    <ul className="list pl0 mt0 measure-wide mw7-l center">
      {this.renderList()}
    </ul>
  )
}

export default Shows
