import React from 'react'

import Icon from '../Icon'
import { useAppSelector } from '../../state/hooks'
import { CTAUnlock, CTAWeb1 } from '../CTA'

import './styles.css'

export default function Header() {
  const webType = useAppSelector((state) => state.global.app.webType)

  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hello I&apos;m</h5>
        <h1>Tiago Tavares</h1>
        <h5 className='text-light'>Blockchain Developer</h5>
        {webType === 'web1' ? <CTAWeb1 /> : <CTAUnlock />}
        <div className='header__socials'>
          <Icon type='linkedIn' />
          <Icon type='gitHub' />
          <Icon type='gitLab' />
        </div>
        <div className='me'>
          <img src={''} alt={'Tiago Tavares'} />
        </div>
      </div>
      <a href='#contact' className='scroll__down'>
        Scroll Down
      </a>
    </header>
  )
}
