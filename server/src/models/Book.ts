import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
  author: string;
  name: string;
  pages: number;
}
const bookSchema: Schema = new Schema({
  author: { type: String, required: true },
  name: { type: String, required: true },
  pages: { type: Number, required: true },
});
const Book = mongoose.model<IBook>('Book', bookSchema);
export default Book;
