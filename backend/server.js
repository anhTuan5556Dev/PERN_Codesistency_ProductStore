import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware bảo mật
app.use(helmet());

// Middleware CORS
app.use(cors());

// Middleware ghi log
app.use(morgan("dev"));

// Middleware cơ bản
app.use(express.json());

// Route cơ bản
app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

// Route test
app.get("/test", (req, res) => {
  res.json({
    message: "Test route is working!",
    timestamp: new Date().toISOString(),
    status: "success",
  });
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
