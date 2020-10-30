import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {

  //Params
  @Input('roleForm') roleForm: FormGroup;
  @Output() handleEvent: EventEmitter<any> = new EventEmitter();
  
  constructor() {
  }

  ngOnInit() {
  }

  get name() {
    return this.roleForm.get('name');
  }

  get description() {
    return this.roleForm.get('description');
  }

  submit() {
    this.handleEvent.emit(this.roleForm.value);
  }
}
