import { useAppDispatch } from '../../state/hooks'

import cv from '../../assets/docs/CV_Tiago_Tavares.pdf'
import { updateWebType } from '../../state/global/reducer'
import { ButtonDefault, ButtonPrimary, ButtonDonwload } from '../Button'
import './styles.css'

export function CTAUnlock() {
  const dispatch = useAppDispatch()
  const changeWebType = (webType: string) => {
    dispatch(updateWebType(webType))
  }

  return (
    <div className='cta'>
      <ButtonDefault label='Unlock Web1' onClick={() => changeWebType('web1')} />
      <ButtonDefault label='Unlock Web2' onClick={() => changeWebType('web2')} />
      <ButtonPrimary label='Unlock Web3' onClick={() => changeWebType('web3')} />
    </div>
  )
}

export function CTAWeb1() {
  return (
    <div className='cta'>
      <ButtonDonwload href={cv} label='Download CV' />
      <ButtonPrimary href='' label='Meet me' />
    </div>
  )
}

export function CTAWeb2() {
  return (
    <div className='cta'>
      <ButtonDonwload href={cv} label='Get CV' />
      <ButtonPrimary href='' label='Meet me' />
    </div>
  )
}

export function CTAWeb3() {
  
  return (
    <div className='cta'>
      <ButtonDonwload href={cv} label='Mint CV' />
      <ButtonPrimary href='' label='Meet me' />
    </div>
  )
}
