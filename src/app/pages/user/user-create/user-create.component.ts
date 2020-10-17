import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { OrganizationService } from 'src/app/services/organization/organization.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  public title: string;
  public userForm: FormGroup;
  public organizations: any;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private orgService: OrganizationService,
  ) {
    this.title = 'Crear Usuario';
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      ci: ['', Validators.required],
      birthday: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      organization: ['', [Validators.required]],
    });
    this.getOrganizations();
  }

  getOrganizations() {
    this.orgService.getOrganization()
      .subscribe(
        (res) => {
          this.organizations = res;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  get name() {
    return this.userForm.get(name)
  }

  save(userForm) {    
    this.userService.createUser(this.userForm.value)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
