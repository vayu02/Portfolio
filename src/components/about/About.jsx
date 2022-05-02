import './about.css'
import Me from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { HiOutlineUsers } from 'react-icons/hi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={Me} alt='' className='img' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Expirence</h5>
              <small>6 months Working</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>8+ completed</small>
            </article>
            <article className='about__card'>
              <HiOutlineUsers className='about__icon' />
              <h5>Lorem ipsum dolor .</h5>
              <small>2</small>
            </article>
          </div>

          <p>
            I'm obsessed with making things and even more obsessed with making
            things better. I've been passionate about computers since I learned
            how to boot my Windows Xp when I was 12. I am Undergrad completed my
            first year in 2020 from Jvm Mehta College ....
            {/* I've been actively
            involved in the Web community for the last 2 years. I've helped in
            creating websites for small businesses, nonprofits when i was doing
            internship at Codify tech . i want to inspire people and give
            tutorials, resources of what i learned till now . My specialty is
            design and development, and turning it webapps into beautiful,
            semantic HTML & CSS. My interests, however, extend beyond the web
            and I love self improvement & spirituality, I even love volunteering
            for nonprofits When I'm not working, I'm probably hanging out with
            my family, playing football or messing around on something inspired
            by Linus Torvalds, Steve Jobs etc. */}
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
