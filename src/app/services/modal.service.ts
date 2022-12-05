import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  // Погугли какие подходы есть для создания модалки. Очень хороший способ через angularCDK, но там может быть сложновато
  isVisible = new BehaviorSubject<boolean>(false)

  constructor() {
  }
  open(){
    this.isVisible.next(true)
  }
  close(){

    this.isVisible.next(false)
  }
}
