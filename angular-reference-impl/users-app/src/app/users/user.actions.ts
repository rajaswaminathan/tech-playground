import { Action, ActionCreator, AnyAction } from 'redux';
import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './model/user-model';
import { NgRedux } from '@angular-redux/store';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

@Injectable({  providedIn: 'root'})
export class UserActions {

    constructor(private http: HttpClient,
        private ngRedux: NgRedux<any>) { }

    createUser(createUserFormValues: any) {

        const userInput = new User(
            null,
            createUserFormValues.firstName,
            createUserFormValues.lastName,
            createUserFormValues.email);

        this.http.post<User>('/api/users', userInput, httpOptions)
            .subscribe((updatedUser) => this.ngRedux.dispatch({type: 'USER_CREATED', payload: this.convertUserModelToForm(updatedUser)}));
    }

    loadUser(id: number) {
        this.http.get<User>('/api/users/' + id)
            .subscribe((loadedUser) => this.ngRedux.dispatch({type: 'USER_LOADED', payload: this.convertUserModelToForm(loadedUser)}));
    }

    updateUser(updateUserFormValues: any, id: number) {

        const userInput = new User(
            id,
            updateUserFormValues.firstName,
            updateUserFormValues.lastName,
            updateUserFormValues.email);

            this.http.put<User>('/api/users', userInput, httpOptions)
            .subscribe((updatedUser) => this.ngRedux.dispatch({type: 'USER_LOADED', payload: this.convertUserModelToForm(updatedUser)}));
    }

    convertUserModelToForm(user: User): any {

        return {email: user.email, firstName: user.firstName, lastName: user.lastName};
    }
}
