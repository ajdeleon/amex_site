import React from 'react'
import MemberCard from './MemberCard'

const sampleBio = "Duis et libero non risus varius dapibus a nec nunc. Nulla sed massa in purus posuere hendrerit. Suspendisse id dictum justo, vitae accumsan justo. Nullam at ex rhoncus, posuere mauris malesuada, pretium justo. Ut porttitor eleifend velit, sodales sagittis augue euismod vitae. Etiam sit amet elit rutrum, accumsan ipsum ut, rhoncus nunc. Aenean eu massa vitae odio mollis pellentesque non a purus. Integer sapien mauris, feugiat quis massa tincidunt, pellentesque blandit ligula. Phasellus dignissim ipsum sollicitudin, tincidunt eros a, dignissim quam."

const members = [
  { name: "Chris Esperance", bio: sampleBio},
  { name: "James Knight", bio: sampleBio},
  { name: "Kilo Martin", bio: sampleBio},
  { name: "Marcely Jean-Pierre", bio: sampleBio},
  { name: "Remi Dhillon", bio: sampleBio},
  { name: "Soumya Dhulekar", bio: sampleBio},
  { name: "Yvonne Anderson", bio: sampleBio},
  { name: "Christina Anthony", bio: sampleBio},
  { name: "Christine Walden", bio: sampleBio},
  { name: "Keane Cobb", bio: sampleBio},
  { name: "Kelly Conrad", bio: sampleBio},
  { name: "Quinton Alexander", bio: sampleBio},
  { name: "Randie Welles", bio: sampleBio},
  { name: "AJ de Leon", bio: sampleBio},
]

const Members = () => {
  this.renderList = () => {
    return members.map(member => {
      return <MemberCard {...member} key={member.name} />
    })
  }
  return (
    <div className="w-90 mw-100-ns tc center">
      {this.renderList()}
    </div>
  )
}

export default Members
