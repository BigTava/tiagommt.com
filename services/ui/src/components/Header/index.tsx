// Components
import Icon from 'components/Icon'
import me from 'assets/images/pfp.png'

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

export default function Header() {
  const dispatch = useAppDispatch()
  const webType = useAppSelector((state) => state.global.app.webType)

  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hello I&apos;m</h5>
        <h1>
          <a onClick={() => dispatch(updateWebType(''))}>Tiago Tavares</a>
        </h1>
        <h5 className='text-light'>Blockchain Developer</h5>
        <div className='header__cta'>
          <h5>Pleese Choose...</h5>
          {CTA[webType as WebType]}
        </div>

        <div className='header__socials'>
          <Icon type='linkedIn' />
          <Icon type='gitHub' />
          <Icon type='gitLab' />
        </div>
        <div className='me'>
          <img src={me} alt='Tiago Tavares' />
        </div>

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}
