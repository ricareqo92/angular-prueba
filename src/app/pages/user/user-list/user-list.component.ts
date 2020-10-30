import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { OrganizationService } from 'src/app/services/organization/organization.service';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: any;
  public showModal: any;
  public id: any;
  public name: any;
  public total: number;
  public currentPage: number;
  public user: User;

  constructor(
    private userService: UserService,
    private orgService: OrganizationService,
    private router: Router
  ) {
    this.users = [];
    this.user = new User(0, '', '', '', '', '', 0);
  }

  ngOnInit() {
    this.getUsers();
    console.log(this.user);
    
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(
        (res) => {
          this.users = res;
          this.total = this.users.lenght;
          this.getOrganizations();   
        },
        (err) => {}
      );
  }

  getOrganizations() {
    this.orgService.getOrganization()
      .subscribe(
        (res) => {
          let organizations = res;
          this.users = this.users.map((user) => {
            let el = organizations.find((item) => item.id == parseInt(user.organization));
            user.organization = el.name;
            return user;
          });          
        },
        (err) => {
          console.log(err);
        }
      );
  }

  active(user) {
    this.user = user;
  }

  pageChanged(p: number) {
    this.currentPage = p;
  }

  remove(id: number) {
    this.userService.deleteUser(id)
      .subscribe(
        (res) => {
          this.users = this.users.filter((item) => item.id !== id )
        }
      )
  }
}
