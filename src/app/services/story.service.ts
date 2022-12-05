import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {catchError, Observable, throwError} from "rxjs";
import {IStory} from "../models/story";

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private url: string = 'http://localhost:5566/stories'

  constructor(private http: HttpClient,
              private errorService: ErrorService) {
  }

  private errorHandler(err: HttpErrorResponse) {
    this.errorService.handle(err.message)
    return throwError(() => err.message)
  }

  getByAuthor(author_id: string): Observable<IStory[]> {
    return this.http.get<IStory[]>(`${this.url}?author_id=${author_id}`)
      .pipe(catchError(this.errorHandler.bind(this)))
  }

  getBySource(source_id: string): Observable<IStory[]> {
    return this.http.get<IStory[]>(`${this.url}?source_id=${source_id}`)
      .pipe(catchError(this.errorHandler.bind(this)))
  }
  post(story: IStory):Observable<IStory>{
    return this.http.post<IStory>(`${this.url}`,story)
  }
}
