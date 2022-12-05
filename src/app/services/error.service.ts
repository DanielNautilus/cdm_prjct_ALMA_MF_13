import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
// import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  error$ = new Subject<string>()


  handle(mess: string) {
    this.error$.next(mess)
  }

  clear() {
    this.error$.next('')
  }

  constructor() {
  }
}
