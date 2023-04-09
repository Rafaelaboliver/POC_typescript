import express from "express";
import 'express-async-errors';
import { handleApplicationErrors } from "./middlewares/error-handling-middleware.js";
import bookRoutes from "./routes/bookRoutes.js";

const server = express();
server
    .use(express.json())
    .use(bookRoutes)
    .use(handleApplicationErrors);

const PORT = Number(process.env.PORT) || 5005;

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});