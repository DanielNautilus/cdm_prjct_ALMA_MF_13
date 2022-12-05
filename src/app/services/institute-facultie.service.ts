import {Injectable} from "@angular/core";
import {IInstituteFacultie} from "../models/institute-facultie";
import {ErrorService} from "./error.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InstituteFacultieService {
  private url: string = 'http://localhost:5566/institute-facultie'

  constructor(private http: HttpClient,
              private errorService: ErrorService) {
  }

  private errorHandler(err: HttpErrorResponse) {
    this.errorService.handle(err.message)
    return throwError(() => err.message)
  }

  // не актуально
  // create() {
  //
  // }
  //
  // update() {
  //
  // }

  get(id: string): Observable<IInstituteFacultie> {
    return this.http.get<IInstituteFacultie>(`${this.url}/${id}`)
      .pipe(catchError(this.errorHandler.bind(this)))
  }

  // Это не надо
  // getByDepartment(department_id: string):Observable<IInstituteFacultie> {
  //   return this.http.get(`${this.url}?`)
  // }

  getAll(): Observable<IInstituteFacultie[]> {
    return this.http.get<IInstituteFacultie[]>(`${this.url}`)
      .pipe(catchError(this.errorHandler.bind(this)))
  }

  // не актуально
  //  delete() {
  //
  //  }
}
