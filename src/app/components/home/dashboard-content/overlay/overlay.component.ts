import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  BookInfoInput,
  EditOverlayChanges,
} from 'src/app/components/types/BookInfo';
import { InputDataService } from 'src/app/service/input-data.service';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { EditBtnEventService } from 'src/app/service/edit-btn-event.service';
import { FormFetcherService } from 'src/app/service/form-fetcher.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
})
export class OverlayComponent implements OnInit {
  action!: string;
  hideSubmit!: boolean;

  overlayForm: any;
  bookInfoinput!: BookInfoInput[];

  editOverlayChanges!: EditOverlayChanges;

  checkboxValue!: boolean;

  constructor(
    private router: Router,
    private data: InputDataService,
    private editData: EditBtnEventService,
    private formData: FormFetcherService
  ) {}

  crossClickHandler() {
    this.router.navigate(['table']);
    this.overlayForm.patchValue({
      name: '',
      bookName: '',
      isbn: '',
      contact: '',
      bookTakenIn: '',
      bookReturnDate: '',
      notReturned: '',
    });
  }

  onSubmit() {
    this.bookInfoinput = {
      ...this.overlayForm.value,
      id: Math.random(),
    };

    console.log(this.bookInfoinput);
    this.data.changeBookInfoInput(this.bookInfoinput);
    this.data.sendClickEvent();
  }

  onEdit() {
    this.editData.sendClickEvent();
  }

  ngOnInit(): void {
    this.data.currentBookInfo.subscribe(
      (bookInfoinput) => (this.bookInfoinput = bookInfoinput)
    );
    this.data.currenteditOverlayChanges.subscribe(
      (editOverlayChanges) => (this.editOverlayChanges = editOverlayChanges)
    );
    this.formData.currentform.subscribe(
      (overlayForm) => (this.overlayForm = overlayForm)
    );
  }
}
