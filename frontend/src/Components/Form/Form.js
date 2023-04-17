import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import { plus } from "../../utils/icons";
import Button from "../Button/Button";
import {
  Container,
  InputContainer,
  SelectContainer,
  Select,
} from "./Form.styled";

function Form() {
  const { addIncome } = useGlobalContext();
  const [inputData, setInputData] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = inputData;

  const handleInput = (name) => (e) => {
    setInputData({ ...inputData, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputData);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <InputContainer>
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Title"
          onChange={handleInput("title")}
        />
      </InputContainer>
      <InputContainer>
        <input
          type="text"
          value={amount}
          name="amount"
          placeholder="Amount"
          onChange={handleInput("amount")}
        />
      </InputContainer>
      <InputContainer>
        <DatePicker
          id="date"
          placeholderText="Enter date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputData({ ...inputData, date: date });
          }}
        />
      </InputContainer>
      <SelectContainer>
        <Select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investiments</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank Transfer</option>
          <option value="youtube">Youtube</option>
          <option value="other">Other</option>
        </Select>
      </SelectContainer>
      <InputContainer>
        <textarea
          name="description"
          value={description}
          placeholder="Add a description"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput("description")}
        ></textarea>
      </InputContainer>
      <div>
        <Button
          name="Add Income"
          icon={plus}
          bPad=".8rem 1.6rem"
          bRad="30px"
          bg="var(--color-accent)"
          color="#fff"
        />
      </div>
    </Container>
  );
}

export default Form;
