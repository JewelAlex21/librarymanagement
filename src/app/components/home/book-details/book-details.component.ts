import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookInfo } from 'src/app/model/book-info';
import { CrudService } from 'src/app/service/crud.service';
import { BookInfoInput } from '../../types/BookInfo';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  
})
export class BookDetailsComponent implements OnInit {
 
  bookInfoObj: BookInfo = new BookInfo();

  //used to store all the BookInfo from the server
  bookInfoArr: BookInfo[] = [];
  //storing variable from template
  bookInfoinput!: BookInfoInput[];

  editInfoInput!: BookInfoInput[];
  bookList:any

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


  constructor(private route: ActivatedRoute,private router: Router,private crudService:CrudService ) { }

  ngOnInit(): void {
    this.getAllBookInfo();

    // this.route.paramMap.subscribe((param) => {
    //   this.bookinfoId = param.get('id');
    // });
    // if (this.bookinfoId) {
    //   this.crudService.getBook(this.bookinfoId).subscribe(
    //     (data) => {
    //       this.book =(data);
    //     }
    //   );
    // }
    // console.log(this.bookinfoId);
   
  }
  
} 


