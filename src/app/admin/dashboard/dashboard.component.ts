import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

export interface homepage {
  welcome: {
    title: string;
    des: string;
    btnTxt: string
  },
  slider: {
    name: string;
    url: string;
  },
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
        this.slider = res.slider;
        this.ourProduct = res.ourProduct;
        this.ourService = res.ourService;
        this.ourClient = res.ourClient;
        this.initForm();
        console.log(res);
      }
    )
  }


  onSubmit() {
    console.log(this.homeForm.value);
  }

  get sliderItems() {
    return this.homeForm.get('sliderItems') as FormArray;
  }

  addItem() {
    this.sliderItems.push(this.fb.control(''));
  }

  removeItem(index) {
    this.sliderItems.removeAt(index);
  }

  get productItems() {
    return this.homeForm.get("productItems") as FormArray;
  }
  addProduct() {
    this.productItems.push(this.fb.control(''));
  }
  removeProduct(index) {
    this.productItems.removeAt(index);
  }

  get serviceItems() {
    return this.homeForm.get("serviceItems") as FormArray;
  }
  addService() {
    this.serviceItems.push(this.fb.control(''));
  }
  removeService(index) {
    this.serviceItems.removeAt(index);
  }

  get clientItems() {
    return this.homeForm.get("clientItems") as FormArray;
  }
  addClient() {
    this.clientItems.push(this.fb.control(''));
  }
  removeClient(index) {
    this.clientItems.removeAt(index);
  }

  private initForm() {
    this.homeForm = this.fb.group({
      title: this.fb.control(this.welcome.title),
      des: this.fb.control(this.welcome.des),
      btnTxt: this.fb.control(this.welcome.btnTxt),
      sliderItems: this.fb.array(this.slider),
      pTitle: this.fb.control(this.ourProduct.title),
      pDes: this.fb.control(this.ourProduct.des),
      productItems: this.fb.array(this.ourProduct.products),
      sTitle: this.fb.control(this.ourService.title),
      sDes: this.fb.control(this.ourService.des),
      serviceItems: this.fb.array(this.ourService.service),
      cTitle: this.fb.control(this.ourClient.title),
      cDes: this.fb.control(this.ourClient.des),
      clientItems: this.fb.array(this.ourClient.client),
    });
  }

}
