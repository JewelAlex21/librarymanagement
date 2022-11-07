import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookInfo } from '../model/book-info';
import { UserInfo } from '../model/user-info';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  serviceURL!: string;
  constructor(private http: HttpClient) {
    this.serviceURL = 'http://localhost:3000/bookInfo';

  }

  addBook(bookInfo: BookInfo): Observable<BookInfo> {
    return this.http.post<BookInfo>(this.serviceURL, bookInfo);
  }
  getAllBooks(): Observable<BookInfo> {
    return this.http.get<BookInfo>(this.serviceURL);
  }
  deleteBook(bookInfo: BookInfo): Observable<BookInfo> {
    return this.http.delete<BookInfo>(this.serviceURL + '/' + bookInfo.id);
  }
  editBook(bookInfo: BookInfo): Observable<BookInfo> {
    return this.http.put<BookInfo>(
      this.serviceURL + '/' + bookInfo.id,
      bookInfo
    );
  }

  // getBook(bookInfo:BookInfo): Observable<BookInfo> {
  //   return this.http.get<BookInfo>(this.serviceURL + '/' + bookInfo.id);
  // }
 
  getBook(bookinfoId: BookInfo): Observable<BookInfo> {
    return this.http.get<BookInfo>(this.serviceURL + '/' + bookinfoId.id);
    
  }
      
}
