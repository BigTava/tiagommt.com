export enum SupportedChainId {
  MAINNET = 1,
  RINKEBY = 4,
  POLYGON = 137,
  POLYGON_MUMBAI = 80001,
}

export const CHAIN_IDS_TO_NAMES = {
  [SupportedChainId.RINKEBY]: "rinkeby",
  [SupportedChainId.POLYGON]: "polygon",
  [SupportedChainId.POLYGON_MUMBAI]: "polygon_mumbai",
};

export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
  SupportedChainId
).filter((id) => typeof id === "number") as SupportedChainId[];

export function isSupportedChain(
  chainId: number | null | undefined
): chainId is SupportedChainId {
  return !!chainId && !!SupportedChainId[chainId];
}

export const TESTNET_CHAIN_IDS = [
  SupportedChainId.RINKEBY,
  SupportedChainId.POLYGON_MUMBAI,
] as const;

export type SupportedTestnetChainId = typeof TESTNET_CHAIN_IDS[number];

export const L1_CHAIN_IDS = [
  SupportedChainId.MAINNET,
  SupportedChainId.RINKEBY,
  SupportedChainId.POLYGON,
  SupportedChainId.POLYGON_MUMBAI,
] as const;

export type SupportedL1ChainId = typeof L1_CHAIN_IDS[number];
