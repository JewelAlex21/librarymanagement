import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookInfo } from 'src/app/model/book-info';
import { CrudService } from 'src/app/service/crud.service';
import { InputDataService } from 'src/app/service/input-data.service';
import { BookInfoInput, EditOverlayChanges } from '../../types/BookInfo';
import { EditBtnEventService } from 'src/app/service/edit-btn-event.service';
import { FormFetcherService } from 'src/app/service/form-fetcher.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  editOverlayChanges!: EditOverlayChanges;
  clickEventSubscription: Subscription;
  editEventSubscription: Subscription;

  overlayForm: any;

  //model of the Book Information
  bookInfoObj: BookInfo = new BookInfo();

  //used to store all the BookInfo from the server
  bookInfoArr: BookInfo[] = [];
  //storing variable from template
  bookInfoinput!: BookInfoInput[];

  editInfoInput!: BookInfoInput[];
  

  getAllBookInfo(): void {
    this.bookInfoObj = new BookInfo();
    this.bookInfoArr = [];
    this.getAllBooks();
  }

  getAllBooks() {
    this.crudService.getAllBooks().subscribe(
      (res) => {
        //@ts-ignore
        this.bookInfoArr.push(...res);
      },
      (err) => {
        alert(`Unable to fetch the list of Books ${err}`);
      }
    );
  }

  addBook(bookInfo: BookInfo) {
    this.crudService.addBook(bookInfo).subscribe(
      (res) => {
        this.getAllBookInfo();
      },
      (err) => {
        alert(err);
      }
    );
    console.log(bookInfo);
  }

  editBook() {
    this.crudService.editBook(this.overlayForm.value).subscribe(
      (res) => {
        this.getAllBookInfo();
      },
      (err) => {
        alert(`Failed to update task ${err}`);
      }
    );
  }

  deleteBook(bookInfo: BookInfo) {
    this.crudService.deleteBook(bookInfo).subscribe(
      (res) => {
        this.getAllBookInfo();
      },
      (err) => {
        alert(`Failed to delete task ${err}`);
      }
    );
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crudService: CrudService,
    private data: InputDataService,
    private editData: EditBtnEventService,
    private formData: FormFetcherService
  ) {
    this.clickEventSubscription = this.data.getClickEvent().subscribe(() => {
      //@ts-ignore
      this.addBook(this.bookInfoinput);
    });
    this.editEventSubscription = this.editData.getClickEvent().subscribe(() => {
      //@ts-ignore
      this.editBook(this.editOverlayChanges);
    });
  }

  plusBtnHandler() {
    this.router.navigate(['create'], { relativeTo: this.route });
    this.data.changeEditOverlayChanges({ action: 'Add', hideSubmit: false });
  }

  editBtnHandler(bookInfo: any) {
    this.data.changeEditOverlayChanges({
      action: 'Edit',
      hideSubmit: true,
    });

    this.overlayForm.patchValue({
      id: bookInfo.id,
      name: bookInfo.name,
      bookName: bookInfo.bookName,
      isbn: bookInfo.isbn,
      contact: bookInfo.contact,
      bookTakenIn: bookInfo.bookTakenIn,
      bookReturnDate: bookInfo.bookReturnDate,
      notReturned: bookInfo.notReturned,
    });
  }

  ngOnInit(): void {
    this.getAllBookInfo();
    this.data.currentBookInfo.subscribe(
      (bookInfoinput) => (this.bookInfoinput = bookInfoinput)
    );
    this.data.currenteditOverlayChanges.subscribe(
      (editOverlayChanges) => (this.editOverlayChanges = editOverlayChanges)
    );

    this.formData.currentform.subscribe((form) => (this.overlayForm = form));
  }

 
}
