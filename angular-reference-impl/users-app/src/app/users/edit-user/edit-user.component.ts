import { Component, OnInit } from '@angular/core';
import { User } from '../model/user-model';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserActions } from '../user.actions';
import { NgRedux } from '@angular-redux/store';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editUserForm: FormGroup;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userActions: UserActions,
    private ngRedux: NgRedux<any>) {

      this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {this.userActions.loadUser(+params['id']); this.id = +params['id']; });
  }

  createForm = () => {

    this.editUserForm = this.formBuilder.group(
      {
        firstName: '',
        lastName: '',
        email: ''
      }
    );
  }

  submit = () => {

    this.userActions.updateUser(this.ngRedux.getState().updateUserForm, this.id);
  }
}
