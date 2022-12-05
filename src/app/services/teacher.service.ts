import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {ErrorService} from "./error.service";
import {ITeacher} from "../models/teacher";
import {InstituteFacultieService} from "./institute-facultie.service";
import {DepartmentService} from "./department.service";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private url: string = 'http://localhost:5566/teacher'

  constructor(private http: HttpClient,
              private errorService: ErrorService) {
  }

  private errorHandler(err: HttpErrorResponse) {
    this.errorService.handle(err.message)
    return throwError(() => err.message)
  }

  create() {

  }

  update() {

  }

  get(id: string): Observable<ITeacher> {
    return this.http.get<ITeacher>(`${this.url}/${id}`)
      .pipe(catchError(this.errorHandler.bind(this)))
  }

  getAll(): Observable<ITeacher[]> {
    return this.http.get<ITeacher[]>(`${this.url}`)
      .pipe(catchError(this.errorHandler.bind(this)))
  }

  delete() {

  }
}
