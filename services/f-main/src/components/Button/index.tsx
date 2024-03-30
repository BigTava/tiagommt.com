// Core
import React, { MouseEventHandler } from 'react'
import classNames from 'classnames'

// Styles
import './styles.css'

interface IButtonProps {
  href?: string
  label: string
  color?: string
  disabled?: boolean
  download?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
}

const STYLES = {
  primary:
    'inline-block bg-primary text-white border border-primary border-solid py-3 px-5 rounded-md cursor-pointer transition duration-400 hover:bg-white hover:text-bg hover:border-transparent',
  transparent:
    'inline-block bg-none text-primary border border-primary border-solid py-3 px-5 rounded-md cursor-pointer transition duration-400 hover:bg-white hover:text-bg hover:border-transparent',
  disabled:
    'inline-block bg-none text-gray-500 border border-solid border-gray-500  py-3 px-5 rounded-md cursor-not-allowed hover:text-gray-500',
}
export function ButtonDefault(props: IButtonProps) {
  return (
    <a
      href={props.href}
      className={classNames({
        [STYLES.primary]: props.color === 'primary',
        [STYLES.transparent]: props.color === 'transparent',
        [STYLES.disabled]: props.color === 'disabled',
      })}
      onClick={props.disabled ? () => null : props.onClick}
      download={props.download}
    >
      {props.label}
    </a>
  )
}
