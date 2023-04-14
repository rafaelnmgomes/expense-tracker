const moongose = require("mongoose");

const db = async () => {
  try {
    moongose.set("strictQuery", false);
    await moongose.connect(process.env.MONGO_URL);
    console.log("DB connected");
  } catch {
    console.log("Error connecting to DB");
  }
};

module.exports = { db };
