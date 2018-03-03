import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBQ49a9fDKPm1YjK7YDvW4wweAEqa6mYMM",
      authDomain: "ng-recipe-book-41bb9.firebaseapp.com"
    });
  }
}
