import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { OrganizationService } from 'src/app/services/organization/organization.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxNotifierService } from 'ngx-notifier';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private router: Router,
    private ngxNotifierService: NgxNotifierService,
    private spinner: NgxSpinnerService,

  ) {
    this.title = 'Editar Usuario';
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
    //Obtener usuario a editar
    this.getUser();
    //Obtener organizaciones
    this.getOrganizations();
  }

  getUser() {
    // Sacar el id del user de la url
    this.route.params.subscribe(
      params => {
        this.id = +params['id'];

        // Petición para sacar los datos del usuario
        this.userService.getUser(this.id)
          .subscribe(
            (res) => {
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
    //Guardar datos del usuario actualizados
    this.userService.editUser(this.userForm.value, this.id)
      .subscribe(
        (res) => {
          //Generar notificación
          this.ngxNotifierService.createToast("Usuario editado exitosamente", "success", 5000);
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
