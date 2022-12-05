import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {ErrorService} from "./error.service";
import {IDepartment} from "../models/department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private url: string = 'http://localhost:5566/department'

  constructor(private http: HttpClient,
              private errorService: ErrorService) {
  }

  private errorHandler(err: HttpErrorResponse) {
    this.errorService.handle(err.message)
    return throwError(() => err.message)
  }

  // create() {
  //
  // }
  //
  // update() {
  //
  // }
  public get(id: string): Observable<IDepartment> {
    return this.http.get<IDepartment>(`${this.url}/${id}`)
      .pipe(catchError(this.errorHandler.bind(this)))
  }

  public getAllByInstituteFacultie(id: string): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(`${this.url}?institute_faculties_id=${id}`)
      .pipe(catchError(this.errorHandler.bind(this)))
  }

  public getAll(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(`${this.url}`)
      .pipe(catchError(this.errorHandler.bind(this)))
  }

  // delete() {
  //
  // }
}
