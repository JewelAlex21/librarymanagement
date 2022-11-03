import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import {
  BookInfoInput,
  EditOverlayChanges,
} from "../components/types/BookInfo";

@Injectable({
  providedIn: "root",
})
export class InputDataService {
  bookInfoinput: BookInfoInput[] = [
    {
      id: 0,
      name: "",
      bookName: "",
      isbn: 0,
      contactNumber: 0,
      bookTakenIn: new Date(0, 0, 0),
      bookReturnDate: new Date(0, 0, 0),
      notReturned: false,
    },
  ];

  //book info
  private bookInfoinputSource = new BehaviorSubject<BookInfoInput[]>(
    this.bookInfoinput,
  );
  currentBookInfo = this.bookInfoinputSource.asObservable();

  changeBookInfoInput(bookInfoinput: BookInfoInput[]) {
    this.bookInfoinputSource.next(bookInfoinput);
  }

  //overlay

  editOverlayChanges: EditOverlayChanges = {
    action: "Add",
    hideSubmit: false,
    editInfoInput: {
      id: 0,
      name: "",
      bookName: "",
      isbn: 0,
      contactNumber: 0,
      bookTakenIn: new Date(0, 0, 0),
      bookReturnDate: new Date(0, 0, 0),
      notReturned: false,
    },
  };

  private editOverlayChangesSource = new BehaviorSubject<EditOverlayChanges>(
    this.editOverlayChanges,
  );
  currenteditOverlayChanges = this.editOverlayChangesSource.asObservable();

  changeEditOverlayChanges(editOverlayChanges: EditOverlayChanges) {
    this.editOverlayChangesSource.next(editOverlayChanges);
  }

  constructor() {}

  private subject = new Subject<any>();

  sendClickEvent() {
    //@ts-ignore
    this.subject.next();
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
