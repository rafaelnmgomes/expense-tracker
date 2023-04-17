import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import { InnerLayout } from "../../styles/Layouts";
import Form from "../Form/Form";
import Item from "../Item/Item";
import {
  Container,
  Content,
  IncomeContainer,
  Total,
  TotalContainer,
} from "./Incomes.styled";

function Incomes() {
  const { addIncome, incomes, getIncomes, deleteIncome, totalIncomes } =
    useGlobalContext();

  const formOptions = [
    {
      value: "",
      label: "Select option",
    },
    {
      value: "salary",
      label: "Salary",
    },
    {
      value: "freelancing",
      label: "Freelancing",
    },
    {
      value: "investments",
      label: "Investiments",
    },
    {
      value: "stocks",
      label: "Stocks",
    },
    {
      value: "bitcoin",
      label: "Bitcoin",
    },
    {
      value: "bank",
      label: "Bank Transfer",
    },
    {
      value: "youtube",
      label: "Youtube",
    },
    {
      value: "other",
      label: "Other",
    },
  ];

  useEffect(() => {
    getIncomes();
  }, []);

  return (
    <Container>
      <InnerLayout>
        <h1>Incomes</h1>
        <TotalContainer>
          Total Income: <Total>${totalIncomes()}</Total>
        </TotalContainer>
        <Content>
          <div>
            <Form
              onSubmit={addIncome}
              buttonText="Add income"
              formOptions={formOptions}
            />
          </div>
          <IncomeContainer>
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description } =
                income;
              return (
                <Item
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
