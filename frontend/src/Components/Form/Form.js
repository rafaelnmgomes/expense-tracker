import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { plus } from "../../utils/icons";
import Button from "../Button/Button";
import {
  Container,
  InputContainer,
  SelectContainer,
  Select,
} from "./Form.styled";

function Form({ onSubmit, buttonText, formOptions }) {
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
    onSubmit(inputData);
  };

  return (
    <Container>
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
          {formOptions.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
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
          name={buttonText}
          icon={plus}
          bPad=".8rem 1.6rem"
          bRad="30px"
          bg="var(--color-accent)"
          color="#fff"
          onClick={handleSubmit}
        />
      </div>
    </Container>
  );
}

export default Form;
