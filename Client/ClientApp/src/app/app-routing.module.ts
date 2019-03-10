import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ErrorComponent} from './error/error.component';
import {UsersComponent} from './users/users.component';
import {CarsComponent} from './cars/cars.component';
import {OrdersComponent} from './orders/orders.component';
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'orders', component: OrdersComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
