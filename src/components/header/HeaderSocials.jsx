import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>

        {/* target=_blank to open it in a new tab */}
        <a href="https://linkedin.com" target="blank"><BsLinkedin/></a>
        <a href="https://github.com" target="blank"><BsGithub/></a>
        <a href="https://facebook.com" target="blank"><BsFacebook/></a>

    </div>
  )
}

export default HeaderSocials