import React from "react";
import { useWeb3React } from "@web3-react/core";

import useSyncChainQuery from "../../hooks/useSyncChainQuery";
import useSelectChain from "../../hooks/useSelectChain";
import { isMobile } from "../../utils/userAgent";
import { getChainInfo } from "../../constants/chainsInfo";
import { Web3Modal } from "../../state/web3/reducer";
import {
  useModalIsOpen,
  useOpenModal,
  useCloseModal,
  useToggleModal,
} from "../../state/web3/hooks";
import "./styles.css";

export default function NetworkSelector() {
  const { chainId, provider } = useWeb3React();

  const node = React.useRef<HTMLDivElement>(null);
  const isOpen = useModalIsOpen(Web3Modal.NETWORK_SELECTOR);
  const openModal = useOpenModal(Web3Modal.NETWORK_SELECTOR);
  const closeModal = useCloseModal(Web3Modal.NETWORK_SELECTOR);
  const toggleModal = useToggleModal(Web3Modal.NETWORK_SELECTOR);

  const info = getChainInfo(chainId);

  const selectChain = useSelectChain();
  useSyncChainQuery();

  if (!chainId || !provider) {
    return null;
  }

  const onSupportedChain = info !== undefined;

  return (
    <div
      className="SelectorWrapper"
      ref={node}
      onMouseEnter={openModal}
      onMouseLeave={closeModal}
      onClick={isMobile ? toggleModal : undefined}
    ></div>
  );
}
