import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow: auto;
`;

export const TotalContainer = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 1rem;
  margin: 1rem 0;
  font-size: 2rem;
  gap: 0.5rem;
`;

export const Total = styled.span`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-green);
`;

export const Content = styled.div`
  display: flex;
  gap: 2rem;
`;

export const IncomeContainer = styled.div`
  flex: 1;
`;
