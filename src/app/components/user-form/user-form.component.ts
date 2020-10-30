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
  
  get name() {
    return this.userForm.get('name');
  }

  get ci() {
    return this.userForm.get('ci');
  }

  get email() {
    return this.userForm.get('email');
  }

  get birthday() {
    return this.userForm.get('birthday');
  }

  get phone() {
    return this.userForm.get('phone');
  }

  get organization() {
    return this.userForm.get('organization');
  }

  submit(userForm) {
    this.handleEvent.emit(userForm);
  }
}
