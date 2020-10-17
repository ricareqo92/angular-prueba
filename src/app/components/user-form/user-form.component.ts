import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input('userForm') userForm: FormGroup;
  @Input('organizations') organizations: FormGroup;
  @Output() handleEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitEvent(userForm) {
    this.handleEvent.emit(userForm);
  }

}
