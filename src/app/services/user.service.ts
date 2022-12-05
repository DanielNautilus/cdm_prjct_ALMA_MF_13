import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {catchError, Observable, throwError} from "rxjs";
import {ITeacher} from "../models/teacher";
import {IUser} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string = 'http://localhost:5566/user'

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

  get(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.url}/${id}`)
      .pipe(catchError(this.errorHandler.bind(this)))
  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.url}`)
      .pipe(catchError(this.errorHandler.bind(this)))
  }

  delete() {

  }
}
