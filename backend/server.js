// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Backend Running");
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const projectroutes = require("./routes/projectroutes");
const cors = require("cors");

dotenv.config();

connectDB()
;
const app = express();
app.use(cors());

app.use("/api/projects", projectroutes);


app.get("/", (req, res) => {
  res.send("Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});