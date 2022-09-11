import React from "react";
import { useWeb3React } from "@web3-react/core";

import { getChainInfo } from "../../modules/chainsInfo";
import { ApplicationModal } from "../../state/application/reducer";
import {
  useModalIsOpen,
  useOpenModal,
  useCloseModal,
} from "../../state/application/hooks";
import { injected } from "../../modules/connectors";

export default function NetworkSelector() {
  const web3React = useWeb3React();

  web3React.activate(injected);

  const node = React.useRef<HTMLDivElement>(null);
  const isOpen = useModalIsOpen(ApplicationModal.NETWORK_SELECTOR);
  const openModal = useOpenModal(ApplicationModal.NETWORK_SELECTOR);
  const closeModal = useCloseModal(ApplicationModal.NETWORK_SELECTOR);
  const toggleModal = useToggleModal(ApplicationModal.NETWORK_SELECTOR);

  const info = getChainInfo(chainId);

  const selectChain = useSelectChain();
  useSyncChainQuery();

  if (!web3React.chainId) {
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
      <SelectorControls supportedChain={onSupportedChain}>
        {onSupportedChain ? (
          <>
            <SelectorLogo src={info.logoUrl} />
            <SelectorLabel>{info.label}</SelectorLabel>
            <StyledChevronDown />
          </>
        ) : (
          <>
            <NetworkIcon />
            <NetworkAlertLabel>Switch Network</NetworkAlertLabel>
            <StyledChevronDown />
          </>
        )}
      </SelectorControls>
      {isOpen && (
        <FlyoutMenu>
          <FlyoutMenuContents>
            <FlyoutHeader>
              <Trans>
                Select a {!onSupportedChain ? " supported " : ""}network
              </Trans>
            </FlyoutHeader>
            {NETWORK_SELECTOR_CHAINS.map((chainId: SupportedChainId) => (
              <Row
                onSelectChain={async (targetChainId: SupportedChainId) => {
                  await selectChain(targetChainId);
                  closeModal();
                }}
                targetChain={chainId}
                key={chainId}
              />
            ))}
          </FlyoutMenuContents>
        </FlyoutMenu>
      )}
    </SelectorWrapper>
  );
}
