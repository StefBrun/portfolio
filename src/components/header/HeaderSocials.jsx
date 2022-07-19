import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>

        {/* target=_blank to open it in a new tab */}
        <a href="https://www.linkedin.com/in/stefano-brunialti-a5918b235/" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/StefBrun" target="blank"><BsGithub/></a>
        <a href="https://www.facebook.com/profile.php?id=100079653392649" target="blank"><BsFacebook/></a>

    </div>
  )
}

export default HeaderSocials