import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/services/roles/roles.service';
import { Role } from 'src/app/models/role/role';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  //Property
  public roles: Array<any>;
  public currentPages: number;
  public total: number;
  public role: Role;

  constructor(
    private roleService: RolesService,
  ) {
    this.role = new Role(0, '', '')
  }

  ngOnInit() {
    this.currentPages = 1;
    this.getRoles();
  }

  getRoles(): void {
    this.roleService.getRoles().subscribe(
      res => {
        this.total = res.lenght;
        this.roles = res;        
      },
      error => {}
    );
  }

  active(role) {
    this.role = role;
  }

  remove(id: number) {
    this.roleService.deleteRole(id)
      .subscribe(
        (res) => {
          this.roles = this.roles.filter((item) => item.id !== id )
        }
      )
  }
}
