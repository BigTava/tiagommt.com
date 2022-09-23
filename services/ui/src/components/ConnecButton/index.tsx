import NetworkSelector from "./NetworkSelector";

interface IConnectButtonProps {}

export function ConnectButton(props: IConnectButtonProps) {
  return (
    <div className="header-element">
      <NetworkSelector />
    </div>
  );
}
