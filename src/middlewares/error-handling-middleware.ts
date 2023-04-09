import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { ApplicationError } from "../protocols.js";

export function handleApplicationErrors(
    error: ApplicationError | Error,
    _req: Request,
    res: Response,
    next: NextFunction,
) {
    if (error.name === 'ConflictError') {
        return res.status(httpStatus.CONFLICT).send({
            message: error.message,
        });
    }

    if (error.name === 'NotFoundError') {
        return res.status(httpStatus.UNAUTHORIZED).send({
            message: error.message,
        });
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: 'InternalServerError',
        message: 'Internal Server Error',
      });
}