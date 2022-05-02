import './footer.css'
import { ImFacebook } from 'react-icons/im'
import { SiInstagram } from 'react-icons/si'
import { FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='/#' className='footer__logo'>
        Vayu Builds
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#/'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experiences</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'>
          <ImFacebook />
        </a>
        <a href='https://instagram.com'>
          <SiInstagram />
        </a>
        <a href='https://twitter.com'>
          <FaTwitter />
        </a>
      </div>
      <div className='footer__copyright'>
        <small> &copy; Vayu Builds. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
