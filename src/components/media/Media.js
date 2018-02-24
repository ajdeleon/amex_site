import React from 'react'

//todo: pull this in dynamically from youtube
const videos = [
  {title: "Opening Video", src: "https://www.youtube.com/embed/V_jbj97HiPI"},
  {title: "Food Porn", src: "https://www.youtube.com/embed/DWhVVbqiJzA"}
]

const Media = () => {
  return (
    <div className="mt4 tc">
      <p className="site-dark f4">Media</p>
      <div>
        {videos.map(video => {
          return <iframe src={video.src} className="ph2 pv1" title={video.title} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        })}
      </div>
    </div>
  )
}

export default Media