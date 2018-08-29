import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

const appRoutes: Routes = [
    {path : '', component: WelcomeComponent},
    {path : 'users', component: ListUserComponent},
    {path : 'create-user', component: CreateUserComponent},
    {path : 'view-user/:id', component: ViewUserComponent},
    {path : 'edit-user/:id', component: EditUserComponent}
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(
        appRoutes, {enableTracing : true }
      )
  ],
  exports : [RouterModule]
})
export class UserRouteModule { }
