import { Injectable } from "@angular/core";
@Injectable({
    providedIn: "root"
})
export class GlobalService {
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

    constructor() { }

    public addAddress(data) {
        this.addressList.push(data)
    }
    public updateAddress(index, data) {
        this.addressList.push(data)
    }
    public deleteAddress(index) {
        this.addressList.splice(index, 1);
    }
}