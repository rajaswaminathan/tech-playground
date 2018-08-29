import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user-model';
import { UserServiceService } from '../user-service.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  user: User;

  constructor(private userService: UserServiceService,
    private route: ActivatedRoute) {

    this.userService = userService;
  }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => this.userService.loadUserById(+params['id'])))
      .subscribe(user => this.user = user);
  }
}
