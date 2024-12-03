import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireDatabase: AngularFireDatabase) { }

  createUserFireDatabase(user: any) {
    return this.fireDatabase.database.ref('users').child(user.cedula).set({
      document: user.cedula,
      name: user.nombres,
      lastname: user.apellidos,
      email: user.email,
      password: user.password
    })
  }

  getUserFireDatabase(user: any): Observable<any> {
    return this.fireDatabase.object('users/' + user.cedula).snapshotChanges();
  }
}
