export type ApplicationError = {
    name: string;
    message: string;
};

export type CreateNewBookRegister = {
    name: string;
    author: string;
    bookId: number;
    available: boolean;
};