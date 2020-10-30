import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit {

  @Input() object: any;
  @Input() title;
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  delete() {
    this.remove.emit(this.object.id);
  }

}
