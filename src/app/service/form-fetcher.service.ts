import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { BookInfoInput } from '../components/types/BookInfo';

@Injectable({
  providedIn: 'root',
})
export class FormFetcherService {
  overlayForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    bookName: new FormControl(''),
    isbn: new FormControl(),
    contact: new FormControl(),
    bookTakenIn: new FormControl(''),
    bookReturnDate: new FormControl(''),
    notReturned: new FormControl(''),
  });

  private formSource = new BehaviorSubject<BookInfoInput[]>(
    //@ts-ignore
    this.overlayForm
  );
  currentform = this.formSource.asObservable();

  constructor() {}

  changeForm(form: BookInfoInput[]) {
    this.formSource.next(form);
  }
}
