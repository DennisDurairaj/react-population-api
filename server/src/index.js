import express from "express";
import path from "path";

const app = express();

app.post("/api/getCountries", (req, res) => {
  res.status(200).json({ errors: { global: "invalid" } });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(9000, () => console.log("Server running on port 9000"));
