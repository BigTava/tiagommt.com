import React from 'react'

import Icon from '../Icon'
import { ButtonPrimary } from '../Button'
import { useAppSelector } from '../../state/hooks'
import './styles.css'

const About = () => {
  const webType = useAppSelector((state) => state.global.app.webType)

  return webType === 'web1' ? (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={''} alt={'Tiago Tavares'} />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <Icon type='tie' className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
              <Icon type='academic' className='about__icon' />
              <h5>Academic</h5>
              <small>Master Degree</small>
            </article>
            <article className='about__card'>
              <Icon type='folder' className='about__icon' />
              <h5>Projects</h5>
              <small>2 Completed</small>
            </article>
          </div>

          <p>
            ⛏ Currently leading the development and production launch of a Renewable Energy
            Community management platform. <br /> 👨‍🔧 A multi-role and flexible person extensively
            involved in web3 innovation, particularly in the energy sector.
          </p>

          <ButtonPrimary href='#account' label="Let's talk" />
        </div>
      </div>
    </section>
  ) : (
    <></>
  )
}

export default About
