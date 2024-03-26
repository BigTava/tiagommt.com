// Components
import { ButtonDefault, ButtonPrimary, ButtonDonwload } from 'components/Button'
import Select from 'components/Fields/Select'

// Redux
import { useAppDispatch } from 'state/hooks'
import { updateWebType } from 'state/global/reducer'

// Utils
import { REST_FRAMEWORKS } from 'utils/constants/rest-frameworks'

// Assets
import cv from 'assets/docs/CV_Tiago_Tavares.pdf'

// Styles
import './styles.css'

export function CTADefault() {
  const dispatch = useAppDispatch()
  const changeWebType = (webType: string) => {
    dispatch(updateWebType(webType))
  }

  return (
    <div className='cta'>
      <ButtonDefault label='WEB 1' onClick={() => changeWebType('WEB1')} color='transparent' />
      <ButtonDefault
        label='WEB 2'
        onClick={() => changeWebType('WEB2')}
        color='disabled'
        disabled
      />
      <ButtonDefault
        label='WEB 3'
        onClick={() => changeWebType('WEB3')}
        color='disabled'
        disabled
      />
    </div>
  )
}

export function CTAWeb1() {
  return (
    <div className='cta'>
      <ButtonDonwload href={cv} label='Download CV' />
      <ButtonPrimary href='about' label='Meet me' />
    </div>
  )
}

export function CTAWeb2() {
  return (
    <div className='cta'>
      <Select
        options={REST_FRAMEWORKS}
        className='h-14 text-primary hover:text-bg hover:bg-white ring-1 ring-inset ring-primary hover:outline-none hover:ring-white hover:cursor-pointer transition-all duration-400 ease-in-out'
      />
      <ButtonDonwload href={cv} label='GET CV' />
      <ButtonPrimary href='about' label='Meet me' />
    </div>
  )
}

export function CTAWeb3() {
  return (
    <div className='cta'>
      <ButtonDonwload href={cv} label='Mint CV' />
      <ButtonPrimary href='about' label='Meet me' />
    </div>
  )
}
