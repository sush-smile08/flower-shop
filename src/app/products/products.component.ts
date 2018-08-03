import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  cart = [];
  recentflower = 0;
  quantity = 0;
  total = 0;
  price = 0;
  id;
  nCnt = 0;
  msg;
  cartlist;
  cart1 = [];
  flag = "false";
  totalqty=0;


  productList = [
    { id: 1, name: 'Rose', price: 10 },
    { id: 2, name: 'Lily', price: 8 },
    { id: 3, name: 'Iris', price: 12 },
    { id: 4, name: 'Dahlia', price: 8 },
    { id: 5, name: 'Delphinium', price: 10 },
    { id: 6, name: 'Lavender', price: 8 },
    { id: 7, name: 'Daffodil', price: 15 },
    { id: 8, name: 'Orchid', price: 20 },
    { id: 9, name: 'Sunflower', price: 22 },
    { id: 10, name: 'Tulip', price: 25 }
  ]
  addToCart(p) {
    //FIRST tIME ADD TO CART
    if (this.cart.length == 0) {
      this.nCnt = 1;
      this.totalqty=this.totalqty+1;
      this.recentflower = p.name;
      this.cart.push(p);
      this.quantity = this.cart.length;

      console.log("Cart Lenght: " + this.cart.length);
      if (this.id != p.id) {
        this.total = this.total + p.price;
      } else {
        this.total = this.total + p.price;
      }
      document.getElementById('qty'+this.cart[0].name).textContent = ""+this.nCnt;
      this.flag = "false";
    } else { //REPEAT PRODUCT ADDED
      if (this.cart.length >= 1) {
        console.log("Cart Lenght: " + this.cart.length);
        for (var i = 0; i < this.cart.length; i++) {
          if (p.id != this.cart[i].id) {
            this.flag = "true";
            console.log("Flag Check: "+p.id+"::"+ this.cart[i].id);
          }else{
            this.flag="false";
            break;
          }
        }

        if (this.flag == "false") {
          this.nCnt=+document.getElementById('qty'+this.cart[i].name).innerHTML;
          //localStorage.setItem('cart_list', JSON.stringify(this.cart));
         // this.cartlist = localStorage.getItem('cart_list');
         // this.cart1 = JSON.parse(this.cartlist);
          // for (var i = 0; i < this.cart1.length; i++) {
          //   this.msg = [];
          //   this.msg = this.cart1[i];
          //   console.log("this.cartlist.length" + this.cart1.length);
          //   console.log("Masg " + p.name + " Cart " + this.cart1[i].name);
          //   if (p.name != this.cart[i].name) {
          //     //this.msg.name = this.cart1[i].name;
          //     console.log("if" + this.nCnt);


          //     this.nCnt = this.nCnt + 1;
          //     this.total = this.total + this.cart1[i].price;
          //     document.getElementById('qty'+this.cart[i].name).innerHTML = "" + this.nCnt;
          //     console.log("if" + this.nCnt);
          //   } else {
          //     this.total = this.total + this.cart[i].price;
          //     this.nCnt = this.nCnt + 1;
          //     console.log("else" + this.nCnt);
          //     document.getElementById('qty'+this.cart[i].name).innerHTML = "" + this.nCnt;

          //   }
          // }
         
         this.nCnt = this.nCnt + 1;
          document.getElementById('qty'+this.cart[i].name).innerHTML = "" + this.nCnt;
          this.totalqty=this.totalqty+1;

          this.total = this.total + this.cart[i].price;

      
        } else {
          this.nCnt=1;
          this.totalqty=this.totalqty+1;
          console.log("FLAG: "+this.flag);
          this.cart.push(p);
          this.quantity = this.cart.length;
          this.total = this.total + this.cart[i].price;
          this.flag="false";
          document.getElementById('qty'+this.cart[this.cart.length+1].name).innerHTML = ""+this.nCnt;
          
        }
      }
    }
    // console.log("cartlist is:" +JSON.stringify(this.cart) + this.cartlist );

  }

  constructor() { }


}
