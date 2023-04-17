import styled from "styled-components";

export const Container = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  color: #222260;
`;

export const Icon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ffffff;
  i {
    font-size: 2.6rem;
  }
`;

export const Title = styled.h5`
  font-size: 1.3rem;
  padding-left: 2rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: ${(props) => props.indicatorColor};
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const InnerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const ButtonContainer = styled.div``;

export const Text = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  opacity: 0.8;
`;
