import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
import { dollar } from "../../utils/icons";
import Chart from "../Chart/Chart";
import History from "../History/History";
import {
  Amount,
  AmountContainer,
  BalanceContainer,
  ChartContainer,
  Container,
  ExpenseContainer,
  HistoryContainer,
  IncomeContainer,
  StatsContainer,
  Title,
} from "./Dashboard.styled";

function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncomes,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <Container>
      <InnerLayout>
        <h1>All transactions</h1>
        <StatsContainer>
          <ChartContainer>
            <Chart />
            <AmountContainer>
              <IncomeContainer>
                <h2>Total Income</h2>
                <p>
                  {dollar} {totalIncomes()}
                </p>
              </IncomeContainer>
              <ExpenseContainer>
                <h2>Total Expense</h2>
                <p>
                  {dollar} {totalExpenses()}
                </p>
              </ExpenseContainer>
              <BalanceContainer>
                <h2>Total Balance</h2>
                <p>
                  {dollar} {totalBalance()}
                </p>
              </BalanceContainer>
            </AmountContainer>
          </ChartContainer>
          <HistoryContainer>
            <History />
            <Title>
              Min <span>Salary</span>Max
            </Title>
            <Amount>
              <p>${Math.min(...incomes.map((item) => item.amount))}</p>
              <p>${Math.max(...incomes.map((item) => item.amount))}</p>
            </Amount>
            <Title>
              Min <span>Expense</span>Max
            </Title>
            <Amount>
              <p>${Math.min(...expenses.map((item) => item.amount))}</p>
              <p>${Math.max(...expenses.map((item) => item.amount))}</p>
            </Amount>
          </HistoryContainer>
        </StatsContainer>
      </InnerLayout>
    </Container>
  );
}

export default Dashboard;
