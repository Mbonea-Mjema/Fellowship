import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject  } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public User = new BehaviorSubject<any>('hello');
  constructor(public afAuth: AngularFireAuth) { }


  doGoogleLogin(){
    console.log("loging in.." )
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        this.User.next(res);
        resolve(res);
        return res
      })
    })
  }
}
