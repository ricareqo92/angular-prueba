import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { OrganizationService } from 'src/app/services/organization/organization.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public title: string;
  public userForm: FormGroup;
  public organizations: any;
  public id: number;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private orgService: OrganizationService,
    private route: ActivatedRoute,
  ) {
    this.title = 'Editar Usuario';
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
    this.getUser();
    this.getOrganizations();
  }

  getUser() {
    // Sacar el id post de la url
    this.route.params.subscribe(
      params => {
        this.id = +params['id'];

        // Petición ajax para sacar los datos del usuario
        this.userService.getUser(this.id)
          .subscribe(
            (res) => {
              console.log(res);
              this.setUserForm(res);
            }
          );
      }
    );
  }

  setUserForm(user) {
    this.userForm.patchValue(
      user
    );
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

  save(userForm) {
    
    this.userService.editUser(this.userForm.value, this.id).subscribe((res) => {
      console.log(res);
    });
  }
}
