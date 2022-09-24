import { useAppDispatch } from "../../state/hooks";

import cv from "../../assets/docs/CV_Tiago_Tavares.pdf";
import { updateWebType } from "../../state/global/reducer";
import { ButtonDefault, ButtonPrimary, ButtonDonwload } from "../Button";
import "./styles.css";

interface ICTAProps {}

export function CTAUnlock(props: ICTAProps) {
  const dispatch = useAppDispatch();
  const chnageWebType = (webType: string) => {
    dispatch(updateWebType(webType));
  };

  return (
    <div className="cta">
      <ButtonDefault
        label="Unlock Web1"
        onClick={() => chnageWebType("web1")}
      />
      <ButtonDefault
        label="Unlock Web2"
        onClick={() => chnageWebType("web2")}
      />
      <ButtonPrimary label="Unlock Web3" />
    </div>
  );
}

export function CTAWeb1(props: ICTAProps) {
  return (
    <div className="cta">
      <ButtonDonwload href={cv} label="Download CV" />
      <ButtonPrimary href="" label="Meet me" />
    </div>
  );
}

export function CTAWeb2(props: ICTAProps) {
  return (
    <div className="cta">
      <ButtonDonwload href={cv} label="Download CV" />
      <ButtonPrimary href="" label="Meet me" />
    </div>
  );
}
