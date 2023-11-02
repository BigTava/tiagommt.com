import { useWeb3React } from '@web3-react/core'
import { useCallback, useRef, useState } from 'react'

import { useOnClickOutside } from 'hooks/useOnClickOutside'

interface ChainSelectorProps {
  leftAlign?: boolean
}

export const ChainSelector = ({ leftAlign }: ChainSelectorProps) => {
  const { chainId } = useWeb3React()

  const ref = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  if (!chainId) {
    return null
  }

  return <></>
}
