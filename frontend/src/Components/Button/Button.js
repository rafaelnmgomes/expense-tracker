import React from "react";
import { ButtonStyled } from "./Button.styled";

function Button({ name, icon, onClick, bg, bPad, color, bRad }) {
  return (
    <ButtonStyled
      bg={bg}
      bPad={bPad}
      color={color}
      bRad={bRad}
      onClick={onClick}
    >
      {icon}
      {name}
    </ButtonStyled>
  );
}

export default Button;
