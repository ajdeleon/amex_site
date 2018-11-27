import React from 'react'
import PropTypes from 'prop-types'

const ShowListItem = ({
  imgSource,
  alt,
  showName,
  location,
  ticketLink,
  showDate,
  showTime,
}) => (
  <li className="flex items-center lh-copy pa3 ph1-l bb b--black-20">
    <img className="w2 h2 w3-ns h3-ns br-100" src={imgSource} alt={alt} />
    <div className="pl3 flex-auto">
      <span className="f6 db b site-dark o-80">{showName}</span>
      <span className="f6 db site-dark o-80">{location}</span>
      <span className="f6 db site-dark o-80">
        {showDate} - {showTime}
      </span>
    </div>
    <div>
      <a
        href={ticketLink}
        target="blank"
        className="f5 link site-blue hover-site-yellow"
      >
        Tickets
      </a>
    </div>
  </li>
)

ShowListItem.propTypes = {
  imgSource: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  showName: PropTypes.string.isRequired,
  location: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
  ticketLink: PropTypes.string.isRequired,
  showDate: PropTypes.string.isRequired,
  showTime: PropTypes.string.isRequired,
}

export default ShowListItem
