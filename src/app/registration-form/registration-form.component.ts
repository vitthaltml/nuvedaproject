import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


import { MustMatch } from '../_helpers/must-match.validator';
import { UserService } from '../_service/user.service'; 
import { AlertService } from '../_service/alert.service'; 


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
     private router: Router,
     private userService: UserService,
     private alertService: AlertService
     ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        title: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
}

get f() { return this.registerForm.controls; }
onSubmit() {
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  this.loading = true;
  this.userService.register(this.registerForm.value).pipe(first()).subscribe(
    data => {
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/login']);
    },
    error => {
        this.alertService.error(error);
        this.loading = false;
    });;
  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

onReset() {
  this.submitted = false;
  this.registerForm.reset();
}


}

