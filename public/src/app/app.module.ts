import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    ProductsHomeComponent,
    PageNotFoundComponent,
    AdminSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
