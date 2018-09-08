import React from 'react'

import ShowListItem from './ShowListItem'
import images from '../../assets'

const shows = [
  {
    imgSource: images.realAmericaBadge,
    alt: 'Fringe Festival: Real America',
    showName: 'Real America',
    showDate: '9/12/18',
    showTime: '8:30PM',
    location: 'Philly Improv Theater',
    ticketLink: 'https://fringearts.com/event/real-america/',
  },
  {
    imgSource: images.realAmericaBadge,
    alt: 'Fringe Festival: Real America',
    showName: 'Real America',
    showDate: '9/13/18',
    showTime: '8:30PM',
    location: 'Philly Improv Theater',
    ticketLink: 'https://fringearts.com/event/real-america/',
  },
  {
    imgSource: images.realAmericaBadge,
    alt: 'Fringe Festival: Real America',
    showName: 'Real America',
    showDate: '9/14/18',
    showTime: '8:30PM',
    location: 'Philly Improv Theater',
    ticketLink: 'https://fringearts.com/event/real-america/',
  },
  {
    imgSource: images.realAmericaBadge,
    alt: 'Fringe Festival: Real America',
    showName: 'Real America',
    showDate: '9/15/18',
    showTime: '5:30PM',
    location: 'Philly Improv Theater',
    ticketLink: 'https://fringearts.com/event/real-america/',
  },
  {
    imgSource: images.realAmericaBadge,
    alt: 'Fringe Festival: Real America',
    showName: 'Real America',
    showDate: '9/15/18',
    showTime: '8:30PM',
    location: 'Philly Improv Theater',
    ticketLink: 'https://fringearts.com/event/real-america/',
  },
  {
    imgSource: images.smallBanner,
    alt: 'Family Business',
    showName: 'Family Business',
    showDate: '9/28/18',
    showTime: '10PM',
    location: 'Philly Improv Theater',
    ticketLink: 'https://www.phitcomedy.com/shows/',
  },
  {
    imgSource: images.smallBanner,
    alt: 'Family Business',
    showName: 'Family Business',
    showDate: '10/05/18',
    showTime: '11PM',
    location: 'Brick Theater NYC',
    ticketLink: 'https://web.ovationtix.com/trs/cal/122?sitePreference=normal',
  },
  {
    imgSource: images.smallBanner,
    alt: 'Family Business',
    showName: 'Family Business',
    showDate: '10/30/18',
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
