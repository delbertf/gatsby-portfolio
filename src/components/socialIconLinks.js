import React from "react"

import IconGithub from './images/github'
import IconLinkedIn from './images/in'
import IconTwitter from './images/twitter'
import IconInstagram from './images/instagram'
import IconCodepen from './images/codepen'
import IconCodewars from './images/codewars'


const SocialIconLinks = ({ iconClasses }) => {

  return (
    <>
      <a href="https://github.com/delbertf" target="_blank" rel="noopener noreferrer">
        <IconGithub classes={`${iconClasses}`} />
      </a>
      <a href="www.linkedin.com/in/delbert-friesen/" target="_blank" rel="noopener noreferrer">
        <IconLinkedIn classes={`${iconClasses}`}  />
      </a>
      <a href="https://twitter.com/friesen_delbert" target="_blank" rel="noopener noreferrer">
        <IconTwitter classes={`${iconClasses}`}  />
      </a>
    </>
  )
}

export default SocialIconLinks
