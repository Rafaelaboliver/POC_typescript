import { NextFunction, Request, Response } from "express";
import bookServices from "../services/bookServices";
import { CreateNewBookRegister } from "../protocols";



async function create(req: Request, res: Response, next: NextFunction) {
    const book: CreateNewBookRegister = {
        name: req.body.name,
        author: req.body.author,
        bookId: req.body.id,
        available: req.body.available
    }

    try {
        await bookServices.create(book);
        return res.sendStatus(201);
    } catch (error) {
        next(error);
    }
}

async function findAll(req: Request, res: Response, next: NextFunction) {
    try {
        const books = await bookServices.findAll();
        return res.send(books)
    } catch (error) {
        next(error);
    }
}

async function updateAvaibility(req: Request, res: Response, next: NextFunction) {
    const book: CreateNewBookRegister = {
        name: req.body.name,
        author: req.body.author,
        bookId: req.body.id,
        available: req.body.available
    }

    try {
        await bookServices.updateAvaibility(book);
        return res.sendStatus(201);
    } catch (error) {
        next(error);
    }
}

async function deleteBook(req: Request, res: Response, next: NextFunction) {
    const book: CreateNewBookRegister = {
        name: req.body.name,
        author: req.body.author,
        bookId: req.body.id,
        available: req.body.available
    }

    try {
        await bookServices.deleteBook(book);
        return res.sendStatus(201);
    } catch (error) {
        next(error);
    }
}

export default {
    create,
    findAll,
    updateAvaibility,
    deleteBook,
}