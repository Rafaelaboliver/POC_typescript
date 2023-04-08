import { ApplicationError } from "utils/protocols";


export function notFoundError(): ApplicationError {
    return {
        name: "notFound",
        message: "No result for this search!"
    }
}