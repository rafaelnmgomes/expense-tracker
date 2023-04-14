const ExpenseModule = require("../models/ExpenseModule");

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const expense = ExpenseModule({
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    // Validations
    if (!title || !amount || !category || !description || !date) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields" });
    }

    if (amount <= 0 || !amount === "number") {
      return res.status(400).json({ message: "Amount must be positive" });
    }

    await expense.save();
    res.status(200).json({ message: "Expense added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseModule.find({ type: "expense" }).sort({
      createdAt: -1,
    });

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;

  ExpenseModule.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ message: "Expense deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Server error" });
    });
};
