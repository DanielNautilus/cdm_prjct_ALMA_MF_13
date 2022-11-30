import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  static url: string = 'http://localhost:5566/teacher'

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
