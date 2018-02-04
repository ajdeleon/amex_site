import React from 'react'
import temp from '../../assets/amex_banner.png'

const MemberCard = () => {
  return (
    <div className="border-box w-20-l w-50-m 2-90-s ph2-ns outline bg-white dib ma2 center">
        <div className="outline w4 mt2 center"><img src={temp} alt="tempMember" /></div>
        <div className="f4 b tc mt2">FirstName LastName</div>
        <div className="f6 tc mt1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ex facere eligendi minima est sint odio tempore reiciendis consectetur, expedita ad cum explicabo ipsa rerum natus quibusdam, provident saepe nulla.</div>
    </div>
  )
}

export default MemberCard