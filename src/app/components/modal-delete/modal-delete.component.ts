import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit {

  @Input() name;
  @Input() type;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  public showModal: boolean;

  constructor() {
    this.showModal = false;
  }

  ngOnInit() {
    this.showModal = true;
  }

  delete() {
    this.remove.emit();
  }

  closeModal() {
    this.close.emit();
  }

}
