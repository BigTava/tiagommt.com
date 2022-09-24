import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks'
import { setOpenModal, Web3Modal } from './reducer'
import { AppState } from '../store'

export function useModalIsOpen(modal: Web3Modal): boolean {
  const openModal = useAppSelector((state: AppState) => state.web3.openModal)
  return openModal === modal
}

export function useOpenModal(modal: Web3Modal): () => void {
  const dispatch = useAppDispatch()
  return useCallback(() => dispatch(setOpenModal(modal)), [dispatch, modal])
}

export function useCloseModal(_modal: Web3Modal): () => void {
  const dispatch = useAppDispatch()
  return useCallback(() => dispatch(setOpenModal(null)), [dispatch])
}

export function useToggleModal(modal: Web3Modal): () => void {
  const isOpen = useModalIsOpen(modal)
  const dispatch = useAppDispatch()
  return useCallback(() => dispatch(setOpenModal(isOpen ? null : modal)), [dispatch, modal, isOpen])
}
