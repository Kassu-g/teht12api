"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bookSchema = new mongoose_1.Schema({
    author: { type: String, required: true },
    name: { type: String, required: true },
    pages: { type: Number, required: true },
});
var Book = mongoose_1.default.model('Book', bookSchema);
exports.default = Book;
