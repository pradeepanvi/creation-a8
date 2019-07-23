import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { GlobalService } from '../shared/global.service';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

export interface homepage {
  welcome: {
    title: string;
    des: string;
    btnTxt: string
  },
  slider: {
    name: string;
    url: string;
  }
  ourProduct: {
    title: string;
    des: string;
    products: any;
  },
  ourService: {
    title: string;
    des: string;
    service: any;
  },
  ourClient: {
    title: string;
    des: string;
    client: any;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {
  welcome: any;
  slider: any;
  ourProduct: any;
  ourService: any;
  ourClient: any;

  constructor(private global: GlobalService, private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://identitycards-3b7a2.firebaseio.com/homePage.json').subscribe(
      (res: homepage) => {
        this.welcome = res.welcome;
        this.slider = res.slider;
        this.ourProduct = res.ourProduct;
        this.ourService = res.ourService;
        this.ourClient = res.ourClient;
        console.log(this.welcome);
      }
    )
    console.log(JSON.stringify(this.ourClient));
  }

  ngAfterContentInit() {

  }

  ngOnDestroy() {
  }

}
