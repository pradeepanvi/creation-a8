import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  welcome: any;
  url = 'https://identitycards-3b7a2.firebaseio.com/';
  url2 = '../../assets/global.json';
  constructor(private fb: FormBuilder, private http: HttpClient) { }
  addressList = [
    {
      address1: "346 1st Floor, Gali no 9, RGB Flats",
      address2: "Raghubir Nagar",
      addressType: "home",
      city: "New Delhi",
      landmark: "Behind Cement Godown",
      mobile: "9818896233",
      name: "Pradeep Kumar",
      pincode: "110027",
      state: "Delhi"
    },
    {
      address1: "346 1st Floor, Gali no 9, RGB Flats",
      address2: "Raghubir Nagar",
      addressType: "home",
      city: "New Delhi",
      landmark: "Behind Cement Godown",
      mobile: "9818896233",
      name: "Pradeep Kumar",
      pincode: "110027",
      state: "Delhi"
    }
  ];

  orderId: any;
  final_order = [{ order: { cartItems: [{ name: "id", model: "m - dl", quantity: 1, price: 35, total: 35 }, { name: "id card", model: "m - dl", quantity: 1, price: 25, total: 25 }, { name: "id", model: "m - dl", quantity: 1, price: 25, total: 25 }, { name: "id dori", model: "m - dl", quantity: 1, price: 25, total: 25 }], subTotal: 110, priceTotal: 110 } }, { address: { address1: "346 1st Floor, Gali no 9, RGB Flats", address2: "Raghubir Nagar", addressType: "home", city: "New Delhi", landmark: "Behind Cement Godown", mobile: "9818896233", name: "Pradeep Kumar", pincode: "110027", state: "Delhi" } }, { orderId: { orderid: "1221" } }];

  public addAddress(data) {
    this.addressList.push(data)
  }
  public updateAddress(index, data) {
    this.addressList.push(data)
  }
  public deleteAddress(index) {
    this.addressList.splice(index, 1);
  }

  public getHomeData() {
    return this.http.get(`${this.url}homePage.json`);
  }

  public getShopData() {
    return this.http.get(`${this.url}shopPage.json`);
  }

  public initItem(name = '', url = '', des = '', price = '') {
    return this.fb.group({
      name: name,
      imgURL: url,
      des: des,
      price: price
    })
  }


}
