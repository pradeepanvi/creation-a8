import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

export interface homepage {
  welcome: {
    title: string;
    des: string;
    btnTxt: string
  },
  sliderItems: {
    name: string;
    url: string;
  },
  ourProduct: {
    title: string;
    des: string;
    productItems: any;
  },
  ourService: {
    title: string;
    des: string;
    serviceItems: any;
  },
  ourClient: {
    title: string;
    des: string;
    clientItems: any;
  }
}

export interface shoppage {
  doriItems: any;
  holderItems: any;
  cardItems: any;
  lanyardItems: any;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  welcome: any;
  slider: any;
  ourProduct: any;
  ourService: any;
  ourClient: any;
  homeForm: FormGroup;
  shopForm: FormGroup;
  slider_items: {
    name: string,
    url: string
  }[];

  doriItems: any;
  holderItems: any;
  cardItems: any;
  lanyardItems: any;

  constructor(private http: HttpClient, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.http.get('https://identitycards-3b7a2.firebaseio.com/homePage.json').subscribe(
      (res: homepage) => {
        this.welcome = res.welcome;
        this.slider = res.sliderItems;
        this.ourProduct = res.ourProduct;
        this.ourService = res.ourService;
        this.ourClient = res.ourClient;
        this.initForm();
        this.addSliderItem();
        this.addProductItem();
        this.addServiceItem();
        this.addClientItem();
      }
    )
    this.http.get('https://identitycards-3b7a2.firebaseio.com/shopPage.json').subscribe(
      (res2: shoppage) => {
        this.doriItems = res2.doriItems;
        this.holderItems = res2.holderItems;
        this.lanyardItems = res2.lanyardItems;
        this.cardItems = res2.cardItems;
        this.shopinitForm();
        this.addDoriItem();
        this.addHolderItem();
        this.addLanyardItem();
        this.addCardItem();
      }
    )
  }


  onSubmit() {
    this.http.put('https://identitycards-3b7a2.firebaseio.com/homePage.json', this.homeForm.value).subscribe(
      (res: homepage) => {
        console.log(res);
      }
    )
  }

  get sliderItemsArray() {
    return this.homeForm.get('sliderItems') as FormArray;
  }

  initItem(name = '', url = '') {
    return this.fb.group({
      name: name,
      url: url
    })
  }

  addSliderItem() {
    for (let i = 0; i < this.slider.length; i++) {
      this.sliderItemsArray.push(this.initItem(this.slider[i].name, this.slider[i].url));
    }
  }

  addItem() {
    this.sliderItemsArray.push(this.initItem());
  }

  removeItem(index: number) {
    this.sliderItemsArray.removeAt(index);
  }

  get productItemsArray() {
    return this.homeForm.get("ourProduct.productItems") as FormArray;
  }
  initProduct(name = '', url = '', des = '') {
    return this.fb.group({
      name: name,
      url: url,
      des: des
    })
  }
  addProductItem() {
    for (let i = 0; i < this.ourProduct.productItems.length; i++) {
      this.productItemsArray.push(this.initProduct(this.ourProduct.productItems[i].name, this.ourProduct.productItems[i].url, this.ourProduct.productItems[i].des))
    }
  }
  addProduct() {
    this.productItemsArray.push(this.initProduct());
  }
  removeProduct(index) {
    this.productItemsArray.removeAt(index);
  }

  get serviceItemsArray() {
    return this.homeForm.get("ourService.serviceItems") as FormArray;
  }
  initService(name = '', icon = '', des = '') {
    return this.fb.group({
      name: name,
      icon: icon,
      des: des
    })
  }
  addServiceItem() {
    for (let i = 0; i < this.ourService.serviceItems.length; i++) {
      this.serviceItemsArray.push(this.initService(this.ourService.serviceItems[i].name, this.ourService.serviceItems[i].icon, this.ourService.serviceItems[i].des))
    }
  }
  addService() {
    this.serviceItemsArray.push(this.initService());
  }
  removeService(index) {
    this.serviceItemsArray.removeAt(index);
  }

  get clientItemsArray() {
    return this.homeForm.get("ourClient.clientItems") as FormArray;
  }
  initClient(name = '', url = '') {
    return this.fb.group({
      name: name,
      url: url
    })
  }
  addClientItem() {
    for (let i = 0; i < this.ourClient.clientItems.length; i++) {
      this.clientItemsArray.push(this.initClient(this.ourClient.clientItems[i].name, this.ourClient.clientItems[i].url))
    }
  }
  addClient() {
    this.clientItemsArray.push(this.initClient());
  }
  removeClient(index) {
    this.clientItemsArray.removeAt(index);
  }

  private initForm() {
    this.homeForm = this.fb.group({
      welcome: this.fb.group({
        title: this.fb.control(this.welcome.title),
        des: this.fb.control(this.welcome.des),
        btnTxt: this.fb.control(this.welcome.btnTxt),
      }),
      sliderItems: this.fb.array([]),
      ourProduct: this.fb.group({
        title: this.fb.control(this.ourProduct.title),
        des: this.fb.control(this.ourProduct.des),
        productItems: this.fb.array([]),
      }),
      ourService: this.fb.group({
        title: this.fb.control(this.ourService.title),
        des: this.fb.control(this.ourService.des),
        serviceItems: this.fb.array([]),
      }),
      ourClient: this.fb.group({
        title: this.fb.control(this.ourClient.title),
        des: this.fb.control(this.ourClient.des),
        clientItems: this.fb.array([]),
      })
    });
  }

  onShopSubmit() {
    console.log(this.shopForm.value);
    this.http.put('https://identitycards-3b7a2.firebaseio.com/shopPage.json', this.shopForm.value).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }

  get doriItemsArray() {
    return this.shopForm.get('doriItems') as FormArray;
  }

  initDoriItem(name = '', url = '', des = '', price = '') {
    return this.fb.group({
      name: name,
      imgURL: url,
      des: des,
      price: price
    })
  }

  addDoriItem() {
    for (let i = 0; i < this.doriItems.length; i++) {
      this.doriItemsArray.push(this.initDoriItem(this.doriItems[i].name, this.doriItems[i].imgURL, this.doriItems[i].des, this.doriItems[i].price));
    }
  }

  addDori() {
    this.doriItemsArray.push(this.initDoriItem());
  }

  removeDori(index: number) {
    this.doriItemsArray.removeAt(index);
  }

  get holderItemsArray() {
    return this.shopForm.get('holderItems') as FormArray;
  }

  initHolderItem(name = '', url = '', des = '', price = '') {
    return this.fb.group({
      name: name,
      imgURL: url,
      des: des,
      price: price
    })
  }

  addHolderItem() {
    for (let i = 0; i < this.holderItems.length; i++) {
      this.holderItemsArray.push(this.initDoriItem(this.holderItems[i].name, this.holderItems[i].imgURL, this.doriItems[i].des, this.holderItems[i].price));
    }
  }

  addHolder() {
    this.holderItemsArray.push(this.initDoriItem());
  }

  removeHolder(index: number) {
    this.holderItemsArray.removeAt(index);
  }

  get lanyardItemsArray() {
    return this.shopForm.get('lanyardItems') as FormArray;
  }

  initLanyardItem(name = '', url = '', des = '', price = '') {
    return this.fb.group({
      name: name,
      imgURL: url,
      des: des,
      price: price
    })
  }

  addLanyardItem() {
    for (let i = 0; i < this.lanyardItems.length; i++) {
      this.lanyardItemsArray.push(this.initLanyardItem(this.lanyardItems[i].name, this.lanyardItems[i].imgURL, this.lanyardItems[i].des, this.lanyardItems[i].price));
    }
  }

  addLanyard() {
    this.lanyardItemsArray.push(this.initLanyardItem());
  }

  removeLanyard(index: number) {
    this.lanyardItemsArray.removeAt(index);
  }

  get cardItemsArray() {
    return this.shopForm.get('cardItems') as FormArray;
  }

  initCardItem(name = '', url = '', des = '', price = '') {
    return this.fb.group({
      name: name,
      imgURL: url,
      des: des,
      price: price
    })
  }

  addCardItem() {
    for (let i = 0; i < this.cardItems.length; i++) {
      this.cardItemsArray.push(this.initCardItem(this.cardItems[i].name, this.cardItems[i].imgURL, this.cardItems[i].des, this.cardItems[i].price));
    }
  }

  addCard() {
    this.cardItemsArray.push(this.initCardItem());
  }

  removeCard(index: number) {
    this.cardItemsArray.removeAt(index);
  }

  private shopinitForm() {
    this.shopForm = this.fb.group({
      doriItems: this.fb.array([]),
      holderItems: this.fb.array([]),
      lanyardItems: this.fb.array([]),
      cardItems: this.fb.array([])
    })
  }

}
