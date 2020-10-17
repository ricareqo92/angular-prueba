import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

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

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.users = [];
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(
        (res) => {
          this.users = res;
          console.log(this.users);
          
        },
        (err) => {
          console.log(err);
          
        }
      );
  }

  redirecTo(userId) {
    this.router.navigate(['/user/edit', userId]);
  }

  activeModal(id: number, name: string): void {
    this.showModal = true;
    this.id = id;
    this.name = name;
  }

  remove() {
    this.userService.deleteUser(this.id)
      .subscribe(
        (res) => {
          console.log(res);
        }
      )
  }

  close() {
    this.showModal = false;
  }


}
