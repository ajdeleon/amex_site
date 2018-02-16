import React from 'react'
import MemberCard from './MemberCard'
import images from '../../assets'
import I from '../I'

const sampleBio = 'Duis et libero non risus varius dapibus a nec nunc. Nulla sed massa in purus posuere hendrerit. Suspendisse id dictum justo, vitae accumsan justo. Nullam at ex rhoncus, posuere mauris malesuada, pretium justo. Ut porttitor eleifend velit, sodales sagittis augue euismod vitae. Etiam sit amet elit rutrum, accumsan ipsum ut, rhoncus nunc. Aenean eu massa vitae odio mollis pellentesque non a purus. Integer sapien mauris, feugiat quis massa tincidunt, pellentesque blandit ligula. Phasellus dignissim ipsum sollicitudin, tincidunt eros a, dignissim quam.'

const members = [
  { name: 'Quinton Alexander', bio: sampleBio, img: images.smallBanner},
  { name: 'Yvonne Anderson', bio: sampleBio, img: images.lit},
  { name: 'Christina Anthony', bio: sampleBio, img: images.smallBanner},
  { name: 'Keane Cobb', bio: sampleBio, img: images.smallBanner},
  { name: 'Kelly Conrad', bio: <div><p>Kelly is thrilled and humbled to be a member of American Express. She holds a BA in Theatre Arts from Suffolk University, and has completed the improv curriculum at Philly Improv Theatre . Kelly is a member of PHIT Improv House Team Hooch, and Sketch House Team, The Decoy; she also performs weekly on Improv Team, Not Yet Rated.</p> <p>Other credits include <I>Dancing Wilde</I> with Boston Actor's Theatre, <I>The Great War Theatre Project</I> with TC Squared Theatre Company, <I>American Revolution</I> with Theater Unspeakable, and <I>House of Solitude Presents McNickel</I> at Philly Improv Theatre. You may also have seen her in Barbara Bush's <I>The Body Show</I>, and The Worst Generation's <I>Celebrity Insurance</I>. When not performing, Kelly enjoys bed, soup dumplings, and utilizing her Moviepass as much as possible.</p></div>, img: images.kelly},
  { name: 'AJ de Leon', bio: sampleBio, img: images.smallBanner},
  { name: 'Remi Dhillon', bio: sampleBio, img: images.smallBanner},
  { name: 'Soumya Dhulekar', bio: sampleBio, img: images.smallBanner},
  { name: 'Chris Esperance', bio: sampleBio, img: images.smallBanner},
  { name: 'Marcely Jean-Pierre', bio: sampleBio, img: images.smallBanner},
  { name: 'James Knight', bio: sampleBio, img: images.smallBanner},
  { name: 'Kilo Martin', bio: sampleBio, img: images.smallBanner},
  { name: 'Christine Walden', bio: sampleBio, img: images.smallBanner},
  { name: 'Randie Welles', bio: <div><p>Randie is a performer and writer from West Philly. She has studied improv and sketch at Philly Improv Theater (PHIT) and the Upright Citizens Brigade. She has also studied acting at the Lantern Theater School. Randie can be found performing regularly with American Express (independent), The N Crowd (short-form, independent), HOOCH and Study Hall (PHIT improv house teams). She has been storyteller at Tell Me A Story, First Person Arts StorySlams, and The Moth. She'll also be hosting a very special love avoidance workshop during April 2018's Five Dollar Comedy Week (Good Good Comedy) and hopes you drop by to assess how good you are at being bad at love.</p><p>Anyway, while AMEX Comedy is like,"cool" or whatever, Randie's most enriching performance experiences were those of background acting for film and television while living in New Orleans. Her roles from that time include the enthusiastic "Mardi Gras reveler" in a first season episode of the unquestionably prestigious Matthew McConaughey, Woody Harrelson cop drama <I>True Detective</I>, the hype AF "Mardi Gras reveler" in the seminal Jesse Eisenberg vehicle <I>Now You See Me</I>, and the patient and perceptive "Liquor store worker" in the Will Ferrell, Zach Galifianakis blockbuster critical darling <I>The Campaign</I>. Oddly, however, all of her compelling work was left on the cutting room floor.</p></div>, img: images.smallBanner},
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
