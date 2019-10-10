import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    let firebaseConfig = {
      apiKey: "AIzaSyAPs6DbUuROjPrbHvxH1WSpwnS9FEHMSmQ",
      authDomain: "ocr-angular-59d17.firebaseapp.com",
      databaseURL: "https://ocr-angular-59d17.firebaseio.com",
      projectId: "ocr-angular-59d17",
      storageBucket: "",
      messagingSenderId: "415303812225",
      appId: "1:415303812225:web:ebf949023f1b4364a9b980",
      measurementId: "G-ERLEE9ZGJ3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }



}
