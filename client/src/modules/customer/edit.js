import {inject} from "aurelia-framework";
import {CustomerData} from "./customerData";
import {Router} from "aurelia-router";
//import {Validation} from "aurelia-validation";

@inject(CustomerData, Router)
export class Edit {

  constructor(data, router) {
    this.data = data;
    this.router = router;
  }

  cancel(){
    //this.customer = this.original;
    return this._loadCustomer(this.customer.id);
  }

  goBack(){
    window.history.back();
  }

  activate(params) {
    this.original = {};
    this.customer = {};

    if (params.id) {
       return this._loadCustomer(params.id);
    }
  }
  _loadCustomer(id){
    return this.data.getById(id)
        .then(customer => {
          this.original = JSON.parse(JSON.stringify(customer));
          return this.customer = customer;
        });
  };

  get isUnchanged(){
    return this.areEqual(this.customer, this.original);
  }
  save() {
    this.data.save(this.customer)
      .then(customer => {
        this.original = JSON.parse(JSON.stringify(customer));
        this.router.navigate("list");
      });
  };
  areEqual(obj1, obj2) {
  return Object.keys(obj1).every((key) => obj2.hasOwnProperty(key) && (obj1[key] === obj2[key]));
};
}
