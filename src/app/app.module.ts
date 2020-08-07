import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerServiceClassComponent } from './customer-service-class/customer-service-class.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ClasslistComponent } from './classlist/classlist.component';
import { LoginComponent } from './login/login.component';
import { DiscussionFormComponent } from './discussion-form/discussion-form.component';
import { FourmComponent } from './fourm/fourm.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerServiceClassComponent,
    PagenotfoundComponent,
    RegistrationFormComponent,
    ClasslistComponent,
    LoginComponent,
    DiscussionFormComponent,
    FourmComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
