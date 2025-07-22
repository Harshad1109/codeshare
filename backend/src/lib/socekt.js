import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from 'cors';

import { initializeRoomHandlers } from './roomManager.js';
import { initializeMediasoupHandlers } from './mediasoupManager.js';
import { initializeYjsHandlers } from './yjsManager.js';

dotenv.config();

const app = express();
const server = http.createServer(app);

const corsOrigin = process.env.CORS_ORIGIN || ['http://localhost:5173', 'http://192.168.0.113:5173'];

app.use(cors({
    origin: corsOrigin,
    credentials: true
}));

const io = new Server(server, {
  cors: {
    origin: corsOrigin,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true
  }
});

// Main connection handler
io.on("connect", (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Initialize all handlers for the connected socket
  initializeRoomHandlers(io, socket);
  initializeMediasoupHandlers(io, socket);
  initializeYjsHandlers(socket);
});

export { app, io, server };