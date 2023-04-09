import { Router } from "express";
import bookControllers from "../controllers/bookControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { bookSchema } from "../schemas/Book.js";



const bookRoutes = Router();

bookRoutes.post(
    '/new-register',
    validateSchema(bookSchema),
    bookControllers.create
);

bookRoutes.get(
    '/all-books',
    bookControllers.findAll
);

bookRoutes.put(
    '/update/:bookId',
    bookControllers.updateAvaibility
);

bookRoutes.delete(
    '/delete/:bookId',
    bookControllers.deleteBook
)

export default bookRoutes;