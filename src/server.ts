import express, { json } from "express";
import cors from "cors";
import routes from "./routes/index";
import 'express-async-errors';
import { handleApplicationErrors } from "./middlewares/error-handling-middleware";

const server = express();
server
    .use(json())
    .use(cors())
    .use(routes)
    .use(handleApplicationErrors);

const PORT = Number(process.env.PORT) || 5000;

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});