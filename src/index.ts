import express from "express";
import type { Request, Response } from "express";
import "dotenv/config";
import { requestLogger } from "./utils/requestLogger";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to user app!" });
});

app.listen(process.env.PORT, async () => {
  console.log(`User app is running on port ${process.env.PORT}`);
});
