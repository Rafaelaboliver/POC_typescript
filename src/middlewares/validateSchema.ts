import { Request, Response } from "express";

import { ObjectSchema } from "joi";
import { conflictError } from "../errors";

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