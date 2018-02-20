import React from 'react'
import MemberCard from './MemberCard'
import images from '../../assets'
import I from '../I'

//const sampleBio = 'Duis et libero non risus varius dapibus a nec nunc. Nulla sed massa in purus posuere hendrerit. Suspendisse id dictum justo, vitae accumsan justo. Nullam at ex rhoncus, posuere mauris malesuada, pretium justo. Ut porttitor eleifend velit, sodales sagittis augue euismod vitae. Etiam sit amet elit rutrum, accumsan ipsum ut, rhoncus nunc. Aenean eu massa vitae odio mollis pellentesque non a purus. Integer sapien mauris, feugiat quis massa tincidunt, pellentesque blandit ligula. Phasellus dignissim ipsum sollicitudin, tincidunt eros a, dignissim quam.'

const members = [
  //{ name: 'Quinton Alexander', bio: sampleBio, img: images.smallBanner},
  //{ name: 'Yvonne Anderson', bio: sampleBio, img: images.lit},
  { name: 'Christina Anthony', bio: <div><p>Christina Anthony is a writer/improvisor/stand-up comedian from San Francisco, California. She worked in the non-profit sector for 7 years before discovering comedy in 2016. You can see her perform improv on PHIT House Teams Overlook and Fan Club as well as indie teams Reservation for One and ¿Que?.</p><p>She likes to spend her free time doing anything but comedy to try and feign some sort of a balanced life. Her passions include basketball, chess, poetry, and outrigger paddling. Her favorite thing to do is buy a solo plane ticket to another country, land with no plans/places to sleep, and letting fate decide the route. Favorite destinations have been Colombia, Vietnam, and India. Is this starting to sound like a dating profile? FML.'</p></div>, img: images.christina},
  //{ name: 'Keane Cobb', bio: sampleBio, img: images.smallBanner},
  { name: 'Kelly Conrad', bio: <div><p>Kelly is thrilled and humbled to be a member of American Express. She holds a BA in Theatre Arts from Suffolk University, and has completed the improv curriculum at Philly Improv Theatre . Kelly is a member of PHIT Improv House Team Hooch, and Sketch House Team, The Decoy; she also performs weekly on Improv Team, Not Yet Rated.</p> <p>Other credits include <I>Dancing Wilde</I> with Boston Actor's Theatre, <I>The Great War Theatre Project</I> with TC Squared Theatre Company, <I>American Revolution</I> with Theater Unspeakable, and <I>House of Solitude Presents McNickel</I> at Philly Improv Theatre. You may also have seen her in Barbara Bush's <I>The Body Show</I>, and The Worst Generation's <I>Celebrity Insurance</I>. When not performing, Kelly enjoys bed, soup dumplings, and utilizing her Moviepass as much as possible.</p></div>, img: images.kelly},
  { name: 'AJ de Leon', bio: <div>AJ has been performing with American Express for nearly two years. You can also see him Thursdays at the Philly Improv Theater with Not Yet Rated, every second Saturday with Page One, and occasionally with his beloved team, PG-13.</div>, img: images.aj},
  //{ name: 'Remi Dhillon', bio: sampleBio, img: images.smallBanner},
  { name: 'Soumya Dhulekar', bio: <div>Soumya Dhulekar is a comedian and illustrator. She makes comics and animations, and does stand-up. Her comics have been featured on Catapult and in various comic anthologies. Her latest illustration can be seen in the comic anthology Divide & Conquer, coming soon from McFarland Publishing in 2018. </div>, img: images.soumya},
  //{ name: 'Chris Esperance', bio: sampleBio, img: images.smallBanner},
  { name: 'Marcely Jean-Pierre', bio: <div><p>Marcely Jean-Pierre is a Philly-based improviser, writer, and performer from Willingboro, New Jersey. He currently directs PHIT house team (In Space), performs with PHIT house team Dutch, and is a head writer and performer for American Express Comedy. </p><p>Among his many comedic inspirations are Eddie Murphy, Dave Chappelle, Key and Peele, Steve Carell, In Living Color, SNL, silly children are swell as well... Marcely also sometimes rhymes things unintentionally and has a background in writing and performing spoken word poetry. He is also social worker by day and occasionally sleeps at night. You can also find Marcely in da club, bottle full of bub, AND co-hosting "Hollywood Shuffle" once a month at PHIT.</p></div>, img: images.marcely},
  //{ name: 'James Knight', bio: sampleBio, img: images.smallBanner},
  { name: 'Kilo Martin', bio: <div><p>Kilo (KEY-LOW) is a theater-dance artist based in Philadelphia. He began is performing career upon receiving a dance fellowship from his alma mater, Williams College. Go Ephs! As a freelance choreographer, he has worked at UArts, Pig Iron Theater,  U.K. artist Febueder, and performed with DWTS Champion Jordan Fischer. Kilo performs and writes with AMEX Comedy and recently premiered his one man dance comedy show <a href="https://www.youtube.com/watch?v=0DJzfKGT9sU" className="i site-blue link dim">The Malcolm X Cabaret</a>.</p></div>, img: images.kilo},
  //{ name: 'Christine Walden', bio: sampleBio, img: images.smallBanner},
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
