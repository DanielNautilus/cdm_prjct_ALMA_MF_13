import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static url: string = 'http://localhost:5566/user'

  constructor(private http: HttpClient) {
  }
  create(){

  }
  update(){

  }
  get(){

  }
  getAll(){

  }

  delete(){

  }
}
