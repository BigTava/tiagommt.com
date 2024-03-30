// Components
import { ButtonDefault } from 'components/Button'
import { InputSelect } from 'components/InputSelect'

// Redux
import { useAppDispatch } from 'state/hooks'
import { updateWebType } from 'state/global/reducer'

// Utils
import { REST_FRAMEWORK_OPTIONS } from 'constants/rest-frameworks'

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
      <ButtonDefault label='WEB 1' onClick={() => changeWebType('WEB1')} color='primary' />
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
      <ButtonDefault href={cv} label='Download CV' color='primary' download />
      <ButtonDefault href='#about' label='Meet me' color='transparent' />
    </div>
  )
}

export function CTAWeb2() {
  return (
    <div className='cta'>
      <InputSelect options={REST_FRAMEWORK_OPTIONS} />
      <ButtonDefault label='GET CV' color='primary' />
      <ButtonDefault href='#about' label='Meet me' color='transparent' />
    </div>
  )
}

export function CTAWeb3() {
  return (
    <div className='cta'>
      <ButtonDefault href={cv} label='Mint CV' />
      <ButtonDefault href='about' label='Meet me' />
    </div>
  )
}
