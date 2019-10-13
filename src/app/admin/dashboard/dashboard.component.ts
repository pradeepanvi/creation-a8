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
  slider_items: {
    name: string,
    url: string
  }[];

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
    console.log(this.sliderItemsArray);
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

}
