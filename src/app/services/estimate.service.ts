import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {catchError, Observable, throwError} from "rxjs";
import {IStory} from "../models/story";
import {IEstimate} from "../models/estimate";

@Injectable({
  providedIn: 'root'
})
export class EstimateService {
  private url: string = 'http://localhost:5566/estimates'

  constructor(private http: HttpClient,
              private errorService: ErrorService) {
  }

  private errorHandler(err: HttpErrorResponse) {
    this.errorService.handle(err.message)
    return throwError(() => err.message)
  }

  getByAuthor(author_id: string): Observable<IEstimate[]> {
    return this.http.get<IEstimate[]>(`${this.url}?author_id=${author_id}`)
      .pipe(catchError(this.errorHandler.bind(this)))
  }

  getBySource(source_id: string): Observable<IEstimate[]> {
    return this.http.get<IEstimate[]>(`${this.url}?source_id=${source_id}`)
      .pipe(catchError(this.errorHandler.bind(this)))
  }
  post(estimate: IEstimate):Observable<IEstimate>{
    return this.http.post<IEstimate>(`${this.url}`,estimate)
  }
}
