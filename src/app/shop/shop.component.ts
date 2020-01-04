import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/global.service';
import { HttpClient } from '@angular/common/http';

export interface shopData {
  doriItems: any;
  holderItems: any;
  cardItems: any;
  lanyardItems: any;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit {
  doriItems: any;
  holderItems: any;
  cardItems: any;
  lanyardItems: any;

  constructor(private http: HttpClient, private _globalService: GlobalService) { }

  ngOnInit() {
    this.http.get('https://identitycards-3b7a2.firebaseio.com/shopPage.json').subscribe(
      (res: shopData) => {
        this.doriItems = res.doriItems;
        this.cardItems = res.cardItems;
        this.holderItems = res.holderItems;
        this.lanyardItems = res.lanyardItems;
      });
    //this._globalService.getShopData().subscribe((res: shopData) => this.shopData = res);
  }

}
