import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '../../node_modules/@angular/common/http';
import { TokenInterceptor } from './http.interceptor';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ViewExpenseComponent } from './view-expense/view-expense.component';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    AddExpenseComponent,
    ViewExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    FormsModule,
    CardModule

  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
