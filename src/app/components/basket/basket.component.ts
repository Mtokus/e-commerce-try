import { Component, Input } from '@angular/core';
import { BasketModel } from 'src/app/models/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {
  @Input() baskets: BasketModel[] = [];
  @Input() total: number = 0;
  constructor() {}

  deleteProduct(basket: BasketModel) {
    let index = this.baskets.indexOf(basket);
    this.baskets.splice(index, 1);
    // this.total=this.total-(basket.product.price*basket.quantity0);
  }
  calc() {
    this.total = 0;
    this.baskets.forEach((element) => {
      this.total = this.total + element.product.price * element.quantity;
    });
    return this.total;
  }
  changeData(basket: BasketModel) {
    let quantity: number = parseInt(
      (<HTMLInputElement>(
        document.getElementById('basketQuantitiy-' + basket.product.name)
      )).value
    );
    let index=this.baskets.indexOf(basket);
    this.baskets.splice(index,1);
    basket.quantity=quantity;
    this.baskets.push(basket);
  }
}
