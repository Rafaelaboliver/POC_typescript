import { ApplicationError } from "protocols";


export function notFoundError(): ApplicationError {
    return {
        name: "notFound",
        message: "No result for this search!"
    }
}