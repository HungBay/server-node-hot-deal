import { Request, Response } from "express";
import { Book } from "src/models/book.model";

class BookController {
    get(req: Request, res: Response) {
        const book: Book = {
            id: 1,
            name: 'Giấc mơ',
            code: 222,
        }
        res.send(book)
    }
}

module.exports = new BookController;