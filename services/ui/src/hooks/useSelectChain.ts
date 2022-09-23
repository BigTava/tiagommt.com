import { useWeb3React } from "@web3-react/core";
import { useCallback } from "react";

import { getConnection } from "../connection/utils";
import { SupportedChainId } from "../constants/chains";
import { addPopup } from "../state/web3/reducer";
import { updateConnectionError } from "../state/connection/reducer";
import { useAppDispatch } from "../state/hooks";
import { switchChain } from "../utils/switchChain";

export default function useSelectChain() {
  const dispatch = useAppDispatch();
  const { connector } = useWeb3React();

  return useCallback(
    async (targetChain: SupportedChainId) => {
      if (!connector) return;

      const connectionType = getConnection(connector)!.type;

      try {
        dispatch(updateConnectionError({ connectionType, error: undefined }));
        await switchChain(connector, targetChain);
      } catch (error: any) {
        console.error("Failed to switch networks", error);

        dispatch(
          updateConnectionError({
            connectionType,
            error: error.message,
          })
        );
        dispatch(
          addPopup({
            content: { failedSwitchNetwork: targetChain },
            key: `failed-network-switch`,
          })
        );
      }
    },
    [connector, dispatch]
  );
}
