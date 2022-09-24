import React from "react";
import styled from "styled-components/macro";
import { useWeb3React } from "@web3-react/core";
import { darken } from "polished";

import useSyncChainQuery from "../../hooks/useSyncChainQuery";
import useSelectChain from "../../hooks/useSelectChain";
import {
  useModalIsOpen,
  useOpenModal,
  useCloseModal,
  useToggleModal,
} from "../../state/web3/hooks";
import { MEDIA_WIDTHS } from "../../theme";
import { isMobile } from "../../utils/userAgent";
import { getChainInfo } from "../../constants/chainsInfo";
import { Web3Modal } from "../../state/web3/reducer";
import "./styles.css";

const SelectorWrapper = styled.div`
  @media screen and (min-width: ${MEDIA_WIDTHS.deprecated_upToSmall}px) {
    position: relative;
  }
`;

const SelectorControls = styled.div<{ supportedChain: boolean }>`
  align-items: center;
  background-color: ${({ theme }) => theme.deprecated_bg0};
  border: 2px solid ${({ theme }) => theme.deprecated_bg0};
  border-radius: 16px;
  color: ${({ theme }) => theme.deprecated_text1};
  display: flex;
  font-weight: 500;
  justify-content: space-between;
  padding: 6px 8px;
  ${({ supportedChain, theme }) =>
    !supportedChain &&
    `
    color: ${theme.deprecated_white};
    background-color: ${theme.deprecated_red1};
    border: 2px solid ${theme.deprecated_red1};
  `}
  cursor: default;
  :focus {
    background-color: ${({ theme }) => darken(0.1, theme.deprecated_red1)};
  }
`;

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
    <SelectorWrapper
      ref={node}
      onMouseEnter={openModal}
      onMouseLeave={closeModal}
      onClick={isMobile ? toggleModal : undefined}
    >
      <SelectorControls supportedChain={onSupportedChain}></SelectorControls>
    </SelectorWrapper>
  );
}
