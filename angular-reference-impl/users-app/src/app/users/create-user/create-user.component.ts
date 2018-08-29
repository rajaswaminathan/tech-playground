import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { User } from '../model/user-model';
import { NgModule } from '@angular/compiler/src/core';
import { UserActions } from '../user.actions';
import { AppStore } from '../user.store';
import { Store } from 'redux';
import { AppState } from '../app.state';
import { NgRedux } from '@angular-redux/store';
import { userReducer } from '../users.reducer';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  createUserForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ngRedux: NgRedux<any>,
    private userActions: UserActions) {

    this.createForm();
  }

  ngOnInit() {
  }

  createForm = () => {

    this.createUserForm = this.formBuilder.group(
      {
        firstName: '',
        lastName: '',
        email: ''
      }
    );
  }

  submit = () => {
    this.userActions.createUser(this.ngRedux.getState().createUserForm);
  }
}
