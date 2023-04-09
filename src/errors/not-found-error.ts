import { ApplicationError } from "../protocols.js";

export function notFoundError(): ApplicationError {
    return {
        name: "notFound",
        message: "No result for this search!"
    }
}