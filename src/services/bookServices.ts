import { notFoundError } from "errors/not-found-error";
import { conflictError } from "../errors";
import bookRepositories from "../repositories/bookRepositories";
import { CreateNewBookRegister } from "../utils/protocols";


async function create(book: CreateNewBookRegister) {
    const thereIsBook = await bookRepositories.findByName(book);
    if (thereIsBook) throw conflictError('Book already exists');

    await bookRepositories.create(book)
}

async function findAll() {
    const result = await bookRepositories.findAll();
    if(!result) throw notFoundError();

    return result;
}

async function updateAvaibility (book:CreateNewBookRegister) {
    
}

export default {
    create,
    findAll,
    updateAvaibility,
}