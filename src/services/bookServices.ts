
import { conflictError } from "../errors";
import bookRepositories from "../repositories/bookRepositories";
import { CreateNewBookRegister } from "../protocols";
import { notFoundError } from "../errors/not-found-error";


async function create(book: CreateNewBookRegister) {
    const thereIsBook = await bookRepositories.findByName(book);
    if (thereIsBook) throw conflictError('Book already exists');

    return await bookRepositories.create(book);
}

async function findAll() {
    const result = await bookRepositories.findAll();
    if(!result) throw notFoundError();

    return result;
}

async function updateAvaibility (book:CreateNewBookRegister) {
    const result = await bookRepositories.findById(book);
    if (!result.rowCount) throw notFoundError();

    return await bookRepositories.updateAvaibility(book);
}

async function deleteBook(book: CreateNewBookRegister) {
    const result = await bookRepositories.findByName(book);
    if(!result) throw notFoundError();

    return await bookRepositories.deleteBook(book);
}

export default {
    create,
    findAll,
    updateAvaibility,
    deleteBook,
}