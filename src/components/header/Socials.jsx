import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'

const Socials = () => {
  return (
    <div className='header__socials  '>
      <a href='http://linkedin.com' rel='noreferrer' target='_blank'>
        <FaLinkedin />
      </a>
      <a href='http://github.com' rel='noreferrer' target='_blank'>
        <BsGithub />
      </a>
      <a href='http://instagram.com' rel='noreferrer' target='_blank'>
        <FaInstagram />
      </a>
    </div>
  )
}

export default Socials
