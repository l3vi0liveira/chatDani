import dotenv from "dotenv";
import express from "./express";
import http from "http";

dotenv.config();

const PORT = process.env.API_PORT;

const app = async () => {
  const httpServer = http.createServer(express);
  httpServer.listen(PORT, () => {
    console.log("Server running in port 3000");
  });
};

export default app();
