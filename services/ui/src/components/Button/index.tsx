import React from "react";

import "./styles.css";

interface IButtonProps {
  href?: string;
  label: string;
  download?: boolean;
}

export function ButtonDefault(props: IButtonProps) {
  return (
    <a href={props.href} className="btn">
      {props.label}
    </a>
  );
}

export function ButtonPrimary(props: IButtonProps) {
  return (
    <a href={props.href} className="btn btn-primary">
      {props.label}
    </a>
  );
}

export function ButtonDonwload(props: IButtonProps) {
  return (
    <a href={props.href} className="btn" download>
      {props.label}
    </a>
  );
}
