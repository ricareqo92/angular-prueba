import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RolesService, Role } from 'src/app/services/roles/roles.service';
import { NgxNotifierService } from 'ngx-notifier';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-roles-create',
  templateUrl: './roles-create.component.html',
  styleUrls: ['./roles-create.component.css']
})
export class RolesCreateComponent implements OnInit {

  public title: string;
  public roleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private roleService: RolesService,
    private ngxNotifierService: NgxNotifierService,
    private ngxSpinnerService: NgxSpinnerService,
    private router: Router,
  ) {
    this.title = 'Crear Rol';
    this.roleForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: ['']
    });
  }

  ngOnInit() {
  }

  submit(role: Role) {
    this.roleService.createRole(role).subscribe(
      (res) => {        
        //Generar notificación
        this.ngxNotifierService.createToast("Role creado exitosamente", "success", 5000);
        setTimeout(() => {
          //Generar spinner
          this.ngxSpinnerService.show();
            setTimeout(() => {
              this.ngxSpinnerService.hide();
              //Ir a la lista de roles
              this.router.navigate(['/roles/lista']);
            }, 2000);
        }, 2000);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
