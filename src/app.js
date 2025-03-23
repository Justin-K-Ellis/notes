import express from "express";
import "dotenv/config";
import router from "./controller.js";

const port = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Test
app.get("/test", (_req, res) => {
  res.status(200).send("Hello, App!");
});

// Router
app.use("/", router);

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
