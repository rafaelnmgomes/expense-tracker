import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
import Form from "../Form/Form";
import IncomeItem from "../Item/Item";
import {
  Container,
  Content,
  IncomeContainer,
  Total,
  TotalContainer,
} from "./Incomes.styled";

function Incomes() {
  const { addIncome, incomes, getIncomes, deleteIncome, totalIncome } =
    useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <Container>
      <InnerLayout>
        <h1>Incomes</h1>
        <TotalContainer>
          Total Income: <Total>${totalIncome()}</Total>
        </TotalContainer>
        <Content>
          <div>
            <Form addIncome={addIncome} />
          </div>
          <IncomeContainer>
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description } =
                income;
              return (
                <IncomeItem
                  key={income._id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  category={category}
                  indicatorColor={"var(--color-green)"}
                  type={"income"}
                  deleteItem={deleteIncome}
                />
              );
            })}
          </IncomeContainer>
        </Content>
      </InnerLayout>
    </Container>
  );
}

export default Incomes;
