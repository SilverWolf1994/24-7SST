import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  createUser: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private _userService: UserService,
    private router: Router,
    private toastrService: ToastrService) {

    this.createUser = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit(): void { }

  submitUser(): void {
    this.submitted = true;

    if(this.createUser.invalid) {
      return;
    }

    this.registrarUser();
  }

  registrarUser(): void {
    const user: any = {
      cedula: this.createUser.value.cedula,
      nombres: this.createUser.value.nombres,
      apellidos: this.createUser.value.apellidos,
      email: this.createUser.value.email,
      password: this.createUser.value.password
    }

    console.log(user);

    this._userService.createUserFireDatabase(user).then(() => {
      console.log("Usuario registrado en Realtime Database de Firebase");
      
      this.toastrService.success(
        'El Usuario ' + user['nombres'] + ' ' + user['apellidos'] + ' se registró correctamente',
        'Registro Exitoso',
        {
          positionClass: 'toast-bottom-right'
        }
      );
      
      this.router.navigate(['/login-user']);
      console.log(user);
    }).catch(error => {
      console.log(error);
    });
  }

}
