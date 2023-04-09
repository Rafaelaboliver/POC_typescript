import { Router } from "express";
import bookControllers from "../controllers/bookControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { bookSchema } from "../schemas/Book.js";



const bookRoutes = Router();

bookRoutes.post(
    '/',
    validateSchema(bookSchema),
    bookControllers.create
);

bookRoutes.get(
    '/home',
    bookControllers.findAll
);

bookRoutes.put(
    '/update',
    bookControllers.updateAvaibility
);

bookRoutes.delete(
    '/delete',
    bookControllers.deleteBook
)

export default bookRoutes;