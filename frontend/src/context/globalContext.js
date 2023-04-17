import { createContext, useContext, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    try {
      const response = await axios.post(`${BASE_URL}/add-income`, income);
      getIncomes();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const getIncomes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-incomes`);
      setIncomes(response.data);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const deleteIncome = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/delete-income/${id}`);
      getIncomes();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const totalIncomes = () => {
    let total = 0;
    incomes.forEach((income) => {
      total += income.amount;
    });
    return total;
  };

  const addExpense = async (expense) => {
    try {
      const response = await axios.post(`${BASE_URL}/add-expense`, expense);
      getExpenses();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const getExpenses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-expenses`);
      setExpenses(response.data);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const deleteExpense = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/delete-expense/${id}`);
      getExpenses();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const totalExpenses = () => {
    let total = 0;
    expenses.forEach((expense) => {
      total += expense.amount;
    });
    return total;
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        totalIncomes,
        addExpense,
        getExpenses,
        expenses,
        deleteExpense,
        totalExpenses,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
