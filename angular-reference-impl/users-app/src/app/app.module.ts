import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { UserRouteModule } from './app.route.module';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { NgReduxModule, NgRedux} from '@angular-redux/store';
import { userReducer, loadUserForEdit } from './users/users.reducer';
import { createLogger } from 'redux-logger';
import {composeReducers, defaultFormReducer, NgReduxFormModule} from '@angular-redux/form';
import { combineReducers} from 'redux';
import { UserActions } from './users/user.actions';

const reducers = composeReducers(
  defaultFormReducer(),
  combineReducers({
    createUserForm: userReducer,
    updateUserForm: loadUserForEdit
  })
);

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    WelcomeComponent,
    ListUserComponent,
    ViewUserComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserRouteModule,
    NgReduxModule,
    NgReduxFormModule
  ],
  providers: [UserActions],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<any>) {
    ngRedux.configureStore(reducers, {}, [ createLogger()]);
  }
}
