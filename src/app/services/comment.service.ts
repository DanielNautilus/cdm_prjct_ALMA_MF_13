import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {catchError, Observable, throwError} from "rxjs";
import {IComment} from "../models/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url: string = 'http://localhost:5566/comments'

  constructor(private http: HttpClient,
              private errorService: ErrorService) {
  }

  private errorHandler(err: HttpErrorResponse) {
    this.errorService.handle(err.message)
    return throwError(() => err.message)
  }

  getByAuthor(author_id: string): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${this.url}?author_id=${author_id}`)
      .pipe(catchError(this.errorHandler.bind(this)))
  }

  getBySource(source_id: string): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${this.url}?source_id=${source_id}`)
      .pipe(catchError(this.errorHandler.bind(this)))
  }
}
