export class BookInfo {
  id?: string;
  name!: string;
  bookName!: string;
  isbn!: number;
  contact!: number;
  bookTakenIn!: Date;
  bookReturnDate!: Date;
  notReturned!: boolean;
}
