// Core
import { useState } from 'react'

// Components
import Icon from 'components/Icon'

// Styles
import './styles.css'

export default function Nav() {
  const [activeNav, setActiveNav] = useState('#home')

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
