import React from "react";

import "./styles.css";

interface IButtonProps {
  type: string;
  href?: string;
  label: string;
  download?: boolean;
}

export default function Button(props: IButtonProps) {
  switch (props.type) {
    case "primary":
      return (
        <a href={props.href} className="btn btn-primary">
          {props.label}
        </a>
      );

    case "primary-submit":
      return (
        <button type="submit" className="btn btn-primary">
          {props.label}
        </button>
      );

    case "primary-target":
      return (
        <a
          href={props.href}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          {props.label}
        </a>
      );

    case "download":
      return (
        <a href={props.href} className="btn" download>
          {props.label}
        </a>
      );

    default:
      return (
        <a href={props.href} className="btn">
          {props.label}
        </a>
      );
  }
}
