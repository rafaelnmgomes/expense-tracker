import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${(props) => props.bg};
  padding: ${(props) => props.bPad};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.bRad};
  outline: none;
  border: none;
  font-family: inherit;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
`;
