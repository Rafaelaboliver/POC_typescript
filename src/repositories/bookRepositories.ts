import connectionDb from "../config/database";
import { CreateNewBookRegister } from "../utils/protocols";

async function create (book: CreateNewBookRegister) {
    await connectionDb.query(`
    INSERT INTO books (name, author, userId, available) 
    VALUES ($1, $2, $3, $4);
    `, [book.name, book.author, book.userId, book.available])
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

export default {
    create,
    findByName,
    findAll
}