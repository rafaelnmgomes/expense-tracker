import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const InputContainer = styled.div`
  input,
  textarea {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }
  input {
    width: 100%;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Select = styled.select`
  font-family: inherit;
  font-size: inherit;
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 2px solid #fff;
  background: transparent;
  resize: none;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  color: rgba(34, 34, 96, 0.9);
  &::placeholder {
    color: rgba(34, 34, 96, 0.4);
  }
`;
