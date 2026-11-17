import express from "express";
import cors from "cors";
import { getHealth } from "./health.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json(getHealth());
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Helpdesk API running on port ${PORT}`);
});