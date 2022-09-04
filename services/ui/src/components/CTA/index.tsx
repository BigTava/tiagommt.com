import cv from "../../assets/CV_Tiago_Tavares.pdf";
import { ButtonDefault, ButtonPrimary, ButtonDonwload } from "../Button";
import "./styles.css";

interface ICTAProps {}

export function CTAUnlock(props: ICTAProps) {
  return (
    <div className="cta">
      <ButtonDefault label="Unlock Web1" />
      <ButtonDefault label="Unlock Web2" />
      <ButtonPrimary label="Unlock Web3" />
    </div>
  );
}

export default function CTAWeb1(props: ICTAProps) {
  return (
    <div className="cta">
      <ButtonDonwload href={cv} label="Download CV" />
      <ButtonPrimary href="" label="Let's talk" />
    </div>
  );
}
