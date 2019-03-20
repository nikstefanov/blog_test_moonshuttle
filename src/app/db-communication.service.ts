import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {formatDate} from '@angular/common';
import { Post } from './post.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept':  'application/json',
    'Access-Control-Allow-Origin': 'https://blog-test-moonshuttle.firebaseio.com'
  })
};

const blog_test_moonshuttle_url = 'https://blog-test-moonshuttle.firebaseio.com/rest/posts';

@Injectable({
  providedIn: 'root'
})
export class DbCommunicationService {  

  constructor(private http: HttpClient) { }

  public storePost(title:String, content:String) {
    let post: Post = {
      title: title,
      content: content,
      date: formatDate(new Date(), 'yyyy/MM/dd', 'en'),
      likes: 0
    };
    return this.http.post(blog_test_moonshuttle_url+'.json', post, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  public getPosts() {
    return this.http.get<Object>(blog_test_moonshuttle_url+'.json',httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  public setLikes(key:String, numLikes:number) {
    return this.http.put(blog_test_moonshuttle_url+'/'+key+'/likes.json', numLikes, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  public deletePost(key:String) {
    return this.http.put(blog_test_moonshuttle_url+'/'+key+'.json', httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}

