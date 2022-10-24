import React from 'react'

import Icon from '../Icon'
import { useAppSelector, useAppDispatch } from '../../state/hooks'
import { updateWebType } from '../../state/global/reducer'
import { CTAUnlock, CTAWeb1 } from '../CTA'

import './styles.css'

export default function Header() {
  const webType = useAppSelector((state) => state.global.app.webType)
  const dispatch = useAppDispatch()

  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hello I&apos;m</h5>
        <h1>
          <a onClick={() => dispatch(updateWebType('unlock'))}>Tiago Tavares</a>
        </h1>
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
