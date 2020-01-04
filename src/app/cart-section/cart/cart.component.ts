import { Component, OnInit, ViewChild, OnChanges, ElementRef, AfterViewInit, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../shared/global.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, DoCheck, OnChanges, AfterViewInit {
  title = "Shopping Cart";
  cartV: any = [
    { name: 'id', model: 'm-dl', quantity: 1, price: 35 },
    { name: 'id card', model: 'm-dl', quantity: 1, price: 25 },
    { name: 'id', model: 'm-dl', quantity: 1, price: 25 },
    { name: 'id dori', model: 'm-dl', quantity: 1, price: 25 }
  ]
  subTotal: number = 0;
  priceTotal: number = 0;
  cartForm: FormGroup;
  //@ViewChild("totalP", {}) totalPrice: ElementRef;

  constructor(private _globalSerive: GlobalService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.addCartItem();
    for (var i of this.cartItemsArray.controls) {
      this.subTotal += i.value.price;
      this.priceTotal += i.value.quantity * i.value.price;
    }
  }

  initItem(name, model, quantity, price) {
    return this.fb.group({
      name: name,
      model: model,
      quantity: quantity,
      price: price,
      total: quantity * price
    })
  }

  get cartItemsArray() {
    return this.cartForm.get("cartItems") as FormArray;
  }

  addCartItem() {
    for (var i of this.cartV) {
      this.cartItemsArray.push(this.initItem(i.name, i.model, i.quantity, i.price))
    }
  }

  removeCart(index: number) {
    this.cartItemsArray.removeAt(index);
  }

  private initForm() {
    this.cartForm = this.fb.group({
      cartItems: this.fb.array([]),
      subTotal: this.subTotal,
      priceTotal: this.priceTotal
    })
  }

  onSubmit() {
    this._globalSerive.final_order.push({ order: this.cartForm.value })
    this.router.navigate(["address"], { relativeTo: this.route });
  }

  ngDoCheck() {
    this.priceTotal = 0;
    for (var i of this.cartItemsArray.controls) {
      this.priceTotal += i.value.quantity * i.value.price;
    }
    for (var x = 0; x < this.cartForm.value.cartItems.length; x++) {
      this.cartForm.value.cartItems[x].total = this.cartForm.value.cartItems[x].quantity * this.cartForm.value.cartItems[x].price;
    }
    this.cartForm.value.subTotal = this.subTotal;
    this.cartForm.value.priceTotal = this.priceTotal;
  }

  continueShop() {
    this.router.navigate(['../shop'], { relativeTo: this.route });
  }

  ngOnChanges() {
  }

  ngAfterViewInit() {
  }

}
