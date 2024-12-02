import React from "react";
import { ButtonConteiner } from "./styles";

const Button = ({ title, variant = "primary", onClick, type = "button" }) => {
  return (
    <ButtonConteiner $variant={variant} onClick={onClick} type={type}>
      {title}
    </ButtonConteiner>
  );
};

export { Button };
