import { Request, Response } from "express";
import { conflictError } from "../errors";
import { ObjectSchema } from "joi";

export function validateSchema(schema: ObjectSchema) {
    return (req: Request, res: Response, next: any) => {
        const { error } = schema.validate(req.body, {abortEarly: false});

        if(error) {
            const errors: any = error.details.map((detail) => detail.message);
            throw conflictError(errors)
        }

        next();
    };
}