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
      await axios.post(`${BASE_URL}/add-income`, income);
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
      await axios.delete(`${BASE_URL}/delete-income/${id}`);
      getIncomes();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <GlobalContext.Provider
      value={{ addIncome, getIncomes, incomes, deleteIncome }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
