const IncomeModule = require("../models/IncomeModule");

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const income = IncomeModule({
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

    await income.save();
    res.status(200).json({ message: "Income added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeModule.find({ type: "income" }).sort({
      createdAt: -1,
    });

    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteIncome = async (req, res) => {
  const { id } = req.params;

  IncomeModule.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json({ message: "Income deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Server error" });
    });
};
