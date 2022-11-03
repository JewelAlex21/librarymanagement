export interface BookInfoInput {
  id: number;
  name: string;
  bookName: string;
  isbn: number;
  contactNumber: number;
  bookTakenIn: Date;
  bookReturnDate: Date;
  notReturned: boolean;
}

export interface EditOverlayChanges {
  action: string;
  hideSubmit: boolean;
  editInfoInput?: BookInfoInput;
}
