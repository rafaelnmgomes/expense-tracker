import React from "react";
import { useGlobalContext } from "../../context/globalContext";
import { Container, Item } from "./History.styled";

function History() {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();

  return (
    <Container>
      <h2>Recent History</h2>
      {history.map((item) => {
        const { _id, title, amount, type } = item;
        return (
          <Item key={_id}>
            <p
              style={{
                color: type === "expense" ? "red" : "var(--color-green)",
              }}
            >
              {title}
            </p>

            <p
              style={{
                color: type === "expense" ? "red" : "var(--color-green)",
              }}
            >
              {type === "expense"
                ? `-${amount <= 0 ? 0 : amount}`
                : `+${amount <= 0 ? 0 : amount}`}
            </p>
          </Item>
        );
      })}
    </Container>
  );
}

export default History;
