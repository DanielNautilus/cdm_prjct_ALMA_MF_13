import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string = '';
  @Output() close = new EventEmitter<void>();
  constructor(public MService: ModalService) {
  }
}
