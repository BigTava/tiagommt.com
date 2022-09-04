import Icon from "../Icon";
import CTA from "../CTA";
import "./styles.css";

export default function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tiago Tavares</h1>
        <h5 className="text-light">Blockchain Developer</h5>
        <CTA type="unlock" />
        <div className="header__socials">
          <Icon type="linkedIn" />
          <Icon type="gitHub" />
          <Icon type="gitLab" />
        </div>
        <div className="me">
          <img src={""} alt={"Tiago Tavares"} />
        </div>
      </div>
      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </header>
  );
}
