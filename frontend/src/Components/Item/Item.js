import React from "react";
import styled from "styled-components";
import {
  bitcoin,
  book,
  calender,
  card,
  circle,
  clothing,
  comment,
  dollar,
  food,
  freelance,
  medical,
  money,
  piggy,
  stocks,
  takeaway,
  trash,
  tv,
  users,
  yt,
} from "../../utils/icons";
import Button from "../Button/Button";
import {
  Container,
  Content,
  Icon,
  InnerContent,
  Title,
  Text,
  ButtonContainer,
} from "./Item.styled";

function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) {
  const categoryIcon = () => {
    switch (category) {
      case "salary":
        return money;
      case "freelancing":
        return freelance;
      case "investments":
        return stocks;
      case "stocks":
        return users;
      case "bitcoin":
        return bitcoin;
      case "bank":
        return card;
      case "youtube":
        return yt;
      case "other":
        return piggy;
      default:
        return "";
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case "education":
        return book;
      case "groceries":
        return food;
      case "health":
        return medical;
      case "subscriptions":
        return tv;
      case "takeaways":
        return takeaway;
      case "clothing":
        return clothing;
      case "travelling":
        return freelance;
      case "other":
        return circle;
      default:
        return "";
    }
  };

  return (
    <Container>
      <Icon>{type === "income" ? categoryIcon() : expenseCatIcon()}</Icon>
      <Content>
        <Title indicatorColor={indicatorColor}>{title}</Title>
        <InnerContent>
          <div>
            <Text>
              {dollar} {amount}
            </Text>
            <Text>
              {calender} {date}
            </Text>
            <Text>
              {comment}
              {description}
            </Text>
          </div>
          <ButtonContainer>
            <Button
              icon={trash}
              bPad="1rem"
              bRad="50%"
              bg="var(--primary-color)"
              color="#fff"
              iColor="#fff"
              hColor="var(--color-green)"
              onClick={() => deleteItem(id)}
            />
          </ButtonContainer>
        </InnerContent>
      </Content>
    </Container>
  );
}

export default IncomeItem;
