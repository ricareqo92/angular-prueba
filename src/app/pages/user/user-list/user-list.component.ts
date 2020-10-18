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
  public total: number;
  public currentPage: number;
  public user: any;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.users = [];
  }

  ngOnInit() {
    this.getUsers();
    this.total = 15;
    this.currentPage = 1;
    this.user = {
      id: 1,
      name: 'Bet'
    }
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(
        (res) => {
          this.users = res;
          this.total = this.users.lenght;     
        },
        (err) => {}
      );
  }

  active(user) {
    this.user = user;
  }

  redirecTo(userId) {
    this.router.navigate(['/user/edit', userId]);
  }

  activeModal(id: number, name: string): void {
    this.showModal = true;
    this.id = id;
    this.name = name;
  }

  pageChanged(p: number) {
    this.currentPage = p;
  }

  remove(id: number) {
    this.userService.deleteUser(id)
      .subscribe(
        (res) => {
          console.log(res);
          this.users = this.users.filter((item) => item.id !== id )
        }
      )
  }

  close() {
    this.showModal = false;
  }

}
