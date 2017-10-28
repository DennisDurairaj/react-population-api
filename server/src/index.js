// Dependencies
import express from "express";
import path from "path";
import bodyParser from "body-parser";

import countries from "./routes/api";

//Middleware
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/api", countries);

//Server
app.listen(9000, () => console.log("Server running on port 9000"));
