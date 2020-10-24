import { Component, OnInit } from "@angular/core";
import * as firebase from 'firebase';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
})

export class UserComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        firebase.initializeApp({
            apiKey: "AIzaSyBQ1cFCPGhT39wrw8ldy69BVXksk8wFrgA",
            authDomain: "https://identitycards-users.firebaseio.com",
        });
    }
}