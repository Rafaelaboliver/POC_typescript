import connectionDb from "../config/database";
import { CreateNewBookRegister } from "../utils/protocols";

async function create (book: CreateNewBookRegister) {
    return await connectionDb.query(`
    INSERT INTO books (name, author, bookId, available) 
    VALUES ($1, $2, $3, $4);
    `, [book.name, book.author, book.bookId, book.available])
}

async function findByName(book:CreateNewBookRegister) {
    return await connectionDb.query(`
    SELECT * from books 
    WHERE book.name = $1;
    `, [book.name]);
}

async function findAll () {
    return await connectionDb.query(`SELECT * from books`);
}

async function findById(book: CreateNewBookRegister) {
    return await connectionDb.query(`
    SELECT * from books
    WHERE bookId = $1;
    `, [book.bookId]);
}

async function updateAvaibility(book: CreateNewBookRegister) {
    await connectionDb.query(`
    UPDATE books
    SET available = $1
    WHERE bookId = $2;
    `, [book.available, book.bookId]);
}

export default {
    create,
    findByName,
    findAll,
    findById,
    updateAvaibility,
}