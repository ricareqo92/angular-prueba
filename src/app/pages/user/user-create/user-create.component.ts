import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { OrganizationService } from 'src/app/services/organization/organization.service';
import { NgxNotifierService } from 'ngx-notifier';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private router: Router,
    private ngxNotifierService: NgxNotifierService,
    private spinner: NgxSpinnerService,
  ) {
    this.title = 'Crear Usuario';
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[A-Za-z ]+$')]],
      ci: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      birthday: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      organization: ['', [Validators.required]],
    });
    //Obtener organizaciones
    this.getOrganizations();
  }

  getOrganizations() {
    this.orgService.getOrganization()
      .subscribe(
        (res) => {
          this.organizations = res;
        },
        (err) => {}
      );
  }

  save(userForm) { 
    //Guardar el usuario   
    this.userService.createUser(this.userForm.value)
      .subscribe(
        (res) => {
          //Generar notificación
          this.ngxNotifierService.createToast("Usuario creado exitosamente", "success", 5000);
          setTimeout(() => {
            //Genear spinner
            this.spinner.show();
              setTimeout(() => {
                this.spinner.hide();
                //Ir a la lista de usuarios
                this.router.navigate(['/usuario/lista']);
              }, 2000);
          }, 2000);
        },
      );
  }
}
