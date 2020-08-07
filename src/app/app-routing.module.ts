import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import { RegistrationFormComponent} from './registration-form/registration-form.component';
import { CustomerServiceClassComponent} from './customer-service-class/customer-service-class.component';
import {ClasslistComponent } from './classlist/classlist.component';
import { LoginComponent } from './login/login.component';
import { DiscussionFormComponent } from './discussion-form/discussion-form.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: 'Registration', component: RegistrationFormComponent},
  { path: 'List', component: ClasslistComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'Discussion', component: DiscussionFormComponent},
  
  
  
  
  
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
