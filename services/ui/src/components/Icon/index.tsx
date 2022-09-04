import { FaUserTie } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { VscFolderLibrary } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillGitlab } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";

import "./styles.css";

interface IIconProps {
  type: string;
  className?: string;
}

export default function Icon(props: IIconProps) {
  switch (props.type) {
    case "tie":
      return <FaUserTie className={props.className} />;

    case "academic":
      return <HiAcademicCap className={props.className} />;

    case "folder":
      return <VscFolderLibrary className={props.className} />;

    case "linkedIn":
      return (
        <a
          href="https://www.linkedin.com/in/tiagommtavares/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      );
    case "gitHub":
      return (
        <a href="https://github.com/BigTava" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      );
    case "gitLab":
      return (
        <a href="https://gitlab.com/BigTava" target="_blank" rel="noreferrer">
          <AiFillGitlab />
        </a>
      );

    case "scroll_down":
      return (
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      );

    case "patchCheck":
      return <BsPatchCheckFill className={props.className} />;

    case "check":
      return <BiCheck className={props.className} />;

    case "home":
      return <AiOutlineHome className={props.className} />;

    case "user":
      return <AiOutlineUser className={props.className} />;

    case "book":
      return <BiBook className={props.className} />;

    case "message":
      return <BiMessageSquareDetail className={props.className} />;

    case "email":
      return <MdOutlineEmail className={props.className} />;

    case "messenger":
      return <RiMessengerLine className={props.className} />;

    default:
      return <></>;
  }
}
