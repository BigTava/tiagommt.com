import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

import { useAppSelector } from '../../state/hooks'
import './styles.css'

const Footer = () => {
  const webType = useAppSelector((state) => state.global.app.webType)

  switch (webType) {
    case 'web1':
      return (
        <footer>
          <a href='#home' className='footer__logo'>
            Tiago Tavares
          </a>
          <ul className='permalinks'>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#experience'>Experience</a>
            </li>
            <li>
              <a href='#services'>Services</a>
            </li>
            <li>
              <a href='#testimonials'>Testimonials</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>

          <div className='footer__socials'>
            <a href='https://facebook.com'>
              <FaFacebookF />
            </a>
            <a href='https://instagram.com'>
              <FiInstagram />
            </a>
          </div>
          <div className='footer__copyright'>
            <small>&copy; Tiago Tavares. All rights reserved.</small>
          </div>
        </footer>
      )

    default:
      return (
        <footer>
          <a href='#home' className='footer__logo'>
            Tiago Tavares
          </a>
          <ul className='permalinks'>
            <li>
              <a href='#home'>Home</a>
            </li>
          </ul>

          <div className='footer__socials'>
            <a href='https://facebook.com'>
              <FaFacebookF />
            </a>
            <a href='https://instagram.com'>
              <FiInstagram />
            </a>
          </div>
          <div className='footer__copyright'>
            <small>&copy; Tiago Tavares. All rights reserved.</small>
          </div>
        </footer>
      )
  }
}

export default Footer
