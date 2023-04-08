import joi from "joi";

export const bookSchema = joi.object({
    name: joi.string().min(4).required(),
    author: joi.string().required(),
    bookId: joi.number(),
    available: joi.boolean().default(true),
});