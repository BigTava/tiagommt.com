import React, { MouseEventHandler } from 'react'

import './styles.css'

interface IButtonProps {
  href?: string
  label: string
  download?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
}

export function ButtonDefault(props: IButtonProps) {
  return (
    <a href={props.href} className='btn' onClick={props.onClick}>
      {props.label}
    </a>
  )
}

export function ButtonPrimary(props: IButtonProps) {
  return (
    <a href={props.href} className='btn btn-primary' onClick={props.onClick}>
      {props.label}
    </a>
  )
}

export function ButtonDonwload(props: IButtonProps) {
  return (
    <a href={props.href} className='btn' download>
      {props.label}
    </a>
  )
}
