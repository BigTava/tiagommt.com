// Components
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

// Assets
import PFP from 'assets/images/pfp-about.jpg'

// Styles
import './styles.css'

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={PFP} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Academic</h5>
              <small>Master in IEM</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>

          <p>
            ⛏ Currently leading the development and production launch of a Renewable Energy
            Community management platform. <br /> 👨‍🔧 A multi-role and flexible person extensively
            involved in web3 innovation, particularly in the energy sector.
          </p>

          <a
            href='https://www.linkedin.com/in/tiagommtavares/'
            target='_blank'
            rel='noreferrer'
            className='btn btn-primary'
          >
            Let&apos; Talk
          </a>
        </div>
      </div>
    </section>
  )
}
