import React from "react";
import "./TextLogo.scss";

const TextLogo = (props) => {
  const { logoText } = props;

  return <h1 className="logoText">{logoText}</h1>;
};

export default TextLogo;
