import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CartSectionComponent } from './cart-section.component';
import { CartComponent } from './cart/cart.component';
import { AddressComponent } from './address/address.component';
import { EditAddressComponent } from './address/edit-address/edit-address.component';
import { PaytmComponent } from './paytm/paytm.component';
import { PaytmOrderComponent } from './paytm-order/paytm-order.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const cartRoutes: Routes = [
    {
        path: 'cart-section', component: CartSectionComponent, children: [
            { path: '', component: CartComponent },
            { path: 'address', component: AddressComponent },
            { path: 'address/:id', component: EditAddressComponent },
            { path: 'new-address', component: EditAddressComponent },
            { path: 'pay-now', component: PaytmComponent },
            { path: 'order-id', component: PaytmOrderComponent },
            { path: 'confirm-order', component: ConfirmOrderComponent },
            { path: 'thank-you', component: ThankYouComponent }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(cartRoutes)
    ],
    exports: [RouterModule]
})

export class CartRoutingModule { }