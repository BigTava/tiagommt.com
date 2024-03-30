// Components
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Icon from 'components/Icon'
import me from 'assets/images/pfp.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

// Assets
import PFP from 'assets/images/pfp-about.jpg'

// Redux
import { useAppSelector, useAppDispatch } from 'state/hooks'
import { updateWebType } from 'state/global/reducer'
import { CTADefault, CTAWeb1, CTAWeb2, CTAWeb3 } from 'components/CTA'

// Styles
import './styles.css'

type WebType = 'WEB1' | 'WEB2' | 'WEB3' | ''

const CTA: Record<WebType, JSX.Element> = {
  WEB1: <CTAWeb1 />,
  WEB2: <CTAWeb2 />,
  WEB3: <CTAWeb3 />,
  '': <CTADefault />,
}
export function Main() {
  const dispatch = useAppDispatch()
  const webType = useAppSelector((state) => state.global.app.webType)

  return (
    <>
      <header id='home' className='h-fit pt-16 overflow-hidden'>
        <div className='container header__container'>
          <h5>Hello I&apos;m</h5>
          <h1>
            <a onClick={() => dispatch(updateWebType(''))}>Tiago Tavares</a>
          </h1>
          <h5 className='text-light'>Blockchain Developer</h5>
          <div className='header__cta'>
            {webType === '' ? <h5>Pleese Choose...</h5> : <h5>Wise Choice!</h5>}
            {CTA[webType as WebType]}
          </div>
          <div className='w-full mt-16 justify-center'>
            <div className='max-w-[20rem] w-[94%] md:w-[22rem] h-[30rem] mx-auto pt-[5rem] px-[1.5rem] bg-gradient-to-b from-primary to-transparent  rounded-t-full  '>
              <img className='h-[22rem] block mx-auto object-cover' src={me} alt='Tiago Tavares' />
            </div>
          </div>

          <div className='header__socials'>
            <Icon type='linkedIn' />
            <Icon type='gitHub' />
            <Icon type='gitLab' />
          </div>

          <a href='#contact' className='scroll__down'>
            Scroll Down
          </a>
        </div>
      </header>
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
              ⛏ Currently building the next generation energy markets.
              <br />
              👨‍🔧 A multi-role and flexible person extensively involved in web3 innovation,
              particularly in the energy sector.
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
      <Nav />
      <Footer />
    </>
  )
}
