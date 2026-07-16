// Components
import Icon from 'components/Icon'

// Styles
import './styles.css'

export default function Footer() {
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
        <Icon type='linkedIn' />
        <Icon type='gitHub' />
      </div>
      <div className='footer__copyright'>
        <small>&copy; Tiago Tavares. All rights reserved.</small>
      </div>
    </footer>
  )
}
