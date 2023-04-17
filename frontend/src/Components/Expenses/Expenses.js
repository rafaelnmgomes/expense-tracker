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
} from "./Expenses.styled";

function Expenses() {
  const { addExpense, expenses, getExpenses, deleteExpense, totalExpenses } =
    useGlobalContext();

  const formOptions = [
    {
      value: "",
      label: "Select option",
    },
    {
      value: "education",
      label: "Education",
    },
    {
      value: "groceries",
      label: "Groceries",
    },
    {
      value: "health",
      label: "Health",
    },
    {
      value: "subscriptions",
      label: "Subscriptions",
    },
    {
      value: "takeaways",
      label: "Takeaways",
    },
    {
      value: "clothing",
      label: "Clothing",
    },
    {
      value: "travelling",
      label: "Travelling",
    },
    {
      value: "other",
      label: "Other",
    },
  ];

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <Container>
      <InnerLayout>
        <h1>Expenses</h1>
        <TotalContainer>
          Total Expenses: <Total>${totalExpenses()}</Total>
        </TotalContainer>
        <Content>
          <div>
            <Form
              onSubmit={addExpense}
              buttonText="Add expense"
              formOptions={formOptions}
            />
          </div>
          <IncomeContainer>
            {expenses.map((expense) => {
              const { _id, title, amount, date, category, description } =
                expense;
              return (
                <Item
                  key={expense._id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  category={category}
                  indicatorColor={"var(--color-accent)"}
                  type={"expense"}
                  deleteItem={deleteExpense}
                />
              );
            })}
          </IncomeContainer>
        </Content>
      </InnerLayout>
    </Container>
  );
}

export default Expenses;
