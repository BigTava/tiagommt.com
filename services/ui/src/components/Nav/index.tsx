import React from 'react'

import { useAppSelector } from '../../state/hooks'
import Icon from '../Icon'
import './styles.css'

export default function Nav() {
  const [activeNav, setActiveNav] = React.useState('#home')

  const webType = useAppSelector((state) => state.global.app.webType)

  switch (webType) {
    case 'web1':
      return (
        <nav>
          <a
            href='#home'
            onClick={() => setActiveNav('#home')}
            className={activeNav === '#home' ? 'active' : ''}
          >
            <Icon type='home' />
          </a>
          <a
            href='#about'
            onClick={() => setActiveNav('#about')}
            className={activeNav === '#about' ? 'active' : ''}
          >
            <Icon type='user' />
          </a>
          <a
            href='#experience'
            onClick={() => setActiveNav('#experience')}
            className={activeNav === '#experience' ? 'active' : ''}
          >
            <Icon type='book' />
          </a>
          <a
            href='#contact'
            onClick={() => setActiveNav('#contact')}
            className={activeNav === '#contact' ? 'active' : ''}
          >
            <Icon type='message' />
          </a>
        </nav>
      )

    default:
      return (
        <nav>
          <a
            href='#home'
            onClick={() => setActiveNav('#home')}
            className={activeNav === '#home' ? 'active' : ''}
          >
            <Icon type='home' />
          </a>
        </nav>
      )
  }
}
