import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  loginUser: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private _userService: UserService,
    private router: Router,
    private toastrService: ToastrService) {

    this.loginUser = this.formBuilder.group({
      cedula: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit(): void { }

  submitUser(): void {
    this.submitted = true;

    if(this.loginUser.invalid) {
      return;
    }

    this.consultarUser();
  }

  consultarUser(): void {
    const user: any = {
      cedula: this.loginUser.value.cedula,
      password: this.loginUser.value.password
    }

    console.log(user);

    this._userService.getUserFireDatabase(user).pipe(
      map(changes =>
        changes.payload.val()
      )
    ).subscribe(data => {
      console.log("Cargando datos de usuario:", data);

      if(data != null && user.cedula == data.document && user.password == data.password) {
        this.toastrService.success(
          'Bienvenido ' + data.name  + ' ' + data.lastname,
          'Validación Correcta',
          {
            positionClass: 'toast-bottom-right'
          }
        );
        this.router.navigate(['/profile-user']);
      } else {
        this.toastrService.error(
          'Datos de usuario invalidos',
          'ERROR',
          {
            positionClass: 'toast-bottom-right'
          }
        );
      }
    });
  }

}
