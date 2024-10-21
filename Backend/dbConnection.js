const mongoose = require("mongoose");
const DB_Name = "LookInToShops"

const dbConnect = async () => {
  await mongoose
    .connect(`${process.env.MONGODB_URI}/${DB_Name}`)
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.log(error.message));
};

module.exports = dbConnect;
