const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnect = require("./dbConnection");

dotenv.config();

dbConnect();

app.use(
  cors({
    origin: "https://localhost:5173/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-control",
      "Expires",
      "Pragma",
    ],
  })
);

app.use(cookieParser())
app.use(express.json())

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server is listening on port: ${process.env.PORT || 5000}`)
);
