import express, { json } from "express";
import cors from "cors";
import routes from "./routes/index";

const server = express();
server.use(json());
server.use(cors());
server.use(routes);


const PORT = Number(process.env.PORT) || 5000;

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});