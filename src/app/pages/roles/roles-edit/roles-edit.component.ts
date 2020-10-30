import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RolesService, Role } from 'src/app/services/roles/roles.service';
import { NgxNotifierService } from 'ngx-notifier';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-roles-edit',
  templateUrl: './roles-edit.component.html',
  styleUrls: ['./roles-edit.component.css']
})
export class RolesEditComponent implements OnInit {

  public title: string;
  public roleForm: FormGroup;
  public id: number;

  constructor(
    private fb: FormBuilder,
    private roleService: RolesService,
    private ngxNotifierService: NgxNotifierService,
    private ngxSpinnerService: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.title = 'Editar Rol';
    this.roleForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: ['']
    });
  }

  ngOnInit() {
    this.getRole();
  }

  getRole(): void {
    this.route.params.subscribe(
      params => {
        //Sacar id del rol de la url
        this.id = +params['id'];
        console.log(this.id);
        
        //Obtener role
        this.roleService.getRole(this.id).subscribe(
          (res) => {
            console.log(res);
            
            this.roleForm.patchValue(res)
          }
        );
      }
    );
  }

  submit(role: Role) {
    this.roleService.editRole(role, this.id).subscribe(
      (res) => {        
        //Generar notificación
        this.ngxNotifierService.createToast("Role editado exitosamente", "success", 5000);
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
