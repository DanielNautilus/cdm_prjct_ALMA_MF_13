import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  static url: string = 'http://localhost:5566/department'

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
