import cv from "../../assets/CV_Tiago_Tavares.pdf";
import Button from "../Button";
import "./styles.css";

interface ICTAProps {
  type: string;
  hrefGit?: string;
  hrefDemo?: string;
}

export default function CTA(props: ICTAProps) {
  switch (props.type) {
    case "unlock":
      return (
        <div className="cta">
          <Button type="" label="Unlock Web1" />
          <Button type="" label="Unlock Web2" />
          <Button type="primary" label="Unlock Web3" />
        </div>
      );

    case "web1":
      return (
        <div className="cta">
          <Button type="download" href={cv} label="Download CV" />
          <Button type="primary" href="#contact" label="Let's talk" />
        </div>
      );

    case "portfolio":
      return (
        <div className="portfolio__item-cta">
          <Button type="primary-target" href={props.hrefGit!} label="Github" />
          <Button
            type="primary-target"
            href={props.hrefDemo!}
            label="Live Demo"
          />
        </div>
      );
    default:
      return <></>;
  }
}
