import { Router } from "express";
import bookRoutes from "./bookRoutes";


const routes = Router();

routes.use('/books', bookRoutes);

export default routes;