import { createSlice, nanoid } from '@reduxjs/toolkit'

import { SupportedChainId } from '../../constants/chains'

export type PopupContent =
  | {
      txn: {
        hash: string
      }
    }
  | {
      failedSwitchNetwork: SupportedChainId
    }

export enum Web3Modal {
  NETWORK_SELECTOR,
}

type PopupList = Array<{
  key: string
  show: boolean
  content: PopupContent
  removeAfterMs: number | null
}>

export interface Web3State {
  readonly chainId: number | null
  readonly openModal: Web3Modal | null
  readonly popupList: PopupList
}

const initialState: Web3State = {
  chainId: null,
  openModal: null,
  popupList: [],
}

const applicationSlice = createSlice({
  name: 'web3',
  initialState,
  reducers: {
    updateWebType(state, action) {
      const { chainId } = action.payload
      state.chainId = chainId
    },
    updateChainId(state, action) {
      const { chainId } = action.payload
      state.chainId = chainId
    },
    setOpenModal(state, action) {
      state.openModal = action.payload
    },
    addPopup(state, { payload: { content, key, removeAfterMs } }) {
      state.popupList = (
        key ? state.popupList.filter((popup) => popup.key !== key) : state.popupList
      ).concat([
        {
          key: key || nanoid(),
          show: true,
          content,
          removeAfterMs,
        },
      ])
    },
    removePopup(state, { payload: { key } }) {
      state.popupList.forEach((p) => {
        if (p.key === key) {
          p.show = false
        }
      })
    },
  },
})

export const { updateChainId, setOpenModal, addPopup, removePopup } = applicationSlice.actions
export default applicationSlice.reducer
