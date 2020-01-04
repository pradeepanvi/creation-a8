import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CartComponent } from './cart/cart.component';
import { AddressComponent } from './address/address.component';
import { EditAddressComponent } from './address/edit-address/edit-address.component';
import { PaytmComponent } from './paytm/paytm.component';
import { PaytmOrderComponent } from './paytm-order/paytm-order.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartSectionComponent } from './cart-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [
        CartSectionComponent,
        CartComponent,
        AddressComponent,
        EditAddressComponent,
        PaytmComponent,
        PaytmOrderComponent,
        ConfirmOrderComponent,
        ThankYouComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        CartRoutingModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CartModule { }