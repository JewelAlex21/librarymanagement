import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookInfo } from 'src/app/model/book-info';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  
})
export class BookDetailsComponent implements OnInit {
 
  public bookinfoId : string | null = '' ;
  public selectedBook : BookInfo = {} as BookInfo;
  public errorMessage : string | undefined;




  constructor(private route: ActivatedRoute,private router: Router,private crudService:CrudService ) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe((param : ParamMap)=>{
      this.bookinfoId = param.get('id');
    });
    if(this.bookinfoId){
      this.crudService.getBook(this.bookinfoId)
      .subscribe((data) => {
        this.selectedBook = data;
      },(error)=>{
        this.errorMessage = error;
      });      
    }   
  }
  
} 


