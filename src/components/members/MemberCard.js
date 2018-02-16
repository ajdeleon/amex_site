import React from 'react'
//import temp from '../../assets/amex_banner_small.png'

const MemberCard = ({ name, bio, img }) => {
  return (
    <div className="dib ba b--site-dark br2 w-30-l w-40-m w-80-s ph2-ns bg-white mh1-ns mt4-ns mt2 ph3 ph4-l v-top">
        <div className="mw-100 mt2 center pt2"><img src={img} alt={name} className="br2"/></div>
        <div className="f4 b tc mt2 site-blue">{name}</div>
        <hr className="mw3 bb bw1 b--site-dark o-50" />
        <div className="f6 tc mt1 site-light pb3">{bio}</div>
    </div>
  )
}

export default MemberCard