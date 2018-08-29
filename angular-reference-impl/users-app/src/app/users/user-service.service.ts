import { Injectable } from '@angular/core';
import {User} from './model/user-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  public createUser(userInput: User): Observable<User> {

    return this.http.post<User>('/api/users', userInput, httpOptions);
  }

  public updateUser(userInput: User): Observable<User> {

    return this.http.put<User>('/api/users', userInput, httpOptions);
  }

  public loadAllUsers(): Observable<User[]> {

    return this.http.get<User[]>('/api/users');
  }

  public loadUserById(id: number): Observable<User> {

    return this.http.get<User>('/api/users/' + id);
  }
}
