import styled from "styled-components";

export const Container = styled.div``;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
`;

export const ChartContainer = styled.div`
  grid-column: 1 / 4;
  height: 400px;
`;

export const AmountContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 2rem;
`;

export const IncomeContainer = styled.div`
  grid-column: span 2;
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 1rem;
`;

export const ExpenseContainer = styled.div`
  grid-column: span 2;
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 1rem;
`;

export const BalanceContainer = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 1rem;
  grid-column: 2 / 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.p`
  font-size: 3.5rem;
  font-weight: 700;
`;

export const Balance = styled.p`
  color: var(--color-green);
  opacity: 0.6;
  font-size: 4.5rem;
`;

export const HistoryContainer = styled.div`
  grid-column: 4 / -1;
`;

export const Title = styled.h2`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
`;

export const Amount = styled.div`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
