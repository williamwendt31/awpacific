import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: AdminLoginComponent },
  { path: 'signup', component: AdminSignupComponent },
  { path: '', pathMatch: 'full', component: ProductsHomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
