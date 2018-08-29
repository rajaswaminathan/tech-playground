import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../model/user-model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[];
  userSrevice: UserServiceService;

  constructor(userSrevice: UserServiceService) {
    this.userSrevice = userSrevice;
  }

  ngOnInit() {
    this.loadUser();
  }

  loadUser = () => {

    this.userSrevice.loadAllUsers()
      .subscribe((users1) => {console.log(users1); this.users = users1; }
    );
  }
}
