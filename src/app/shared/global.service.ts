import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  welcome: any;
  constructor(private http: HttpClient) { }

  getHomeData() {
    this.http.get('https://identitycards-3b7a2.firebaseio.com/homePage.json').subscribe(
      (res) => this.welcome = res
    )
  }
}
