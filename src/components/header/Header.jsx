import CTA from './CTA'
import hero from '../../assets/me.png'
import Socials from './Socials'
import './header.css'

const Header = () => {
  return (
    <header id='#'>
      <div className='container header__container '>
        <h5>Hello I'm </h5>
        <h1>Ashish Shejwal</h1>
        <h5 className='text-light'>Front End Developer</h5>
        <CTA />
        <Socials />
        <div className='hero'>
          <img src={hero} alt='' className='img' />
        </div>
        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
