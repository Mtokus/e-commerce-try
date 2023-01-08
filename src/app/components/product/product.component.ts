import { Component, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr/public_api';
import { elementAt } from 'rxjs';
import { BasketModel } from 'src/app/models/basket';
import { ProductModel } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
// implements OnInit
export class ProductComponent {
  products: ProductModel[] = [
    { name: 'Peynir', price: 85, imageUrl: 'assets/img/peynir.jpg' },
    { name: 'Armut', price: 15, imageUrl: 'assets/img/armut.jpg' },
    { name: 'Elma', price: 20, imageUrl: 'assets/img/elma.jpg' },
    { name: 'Tereyag', price: 105, imageUrl: 'assets/img/tereyag.jpg' },
    { name: 'Zeytin', price: 65, imageUrl: 'assets/img/zeytin.jpg' },
  ];
  baskets: BasketModel[] = [];
  total:number=0;
  @Output() myEvent: EventEmitter<any> = new EventEmitter();
  
  constructor() {}
  
  addBasket(product: ProductModel) {
    let basketModel = new BasketModel();
    basketModel.product = product;
    basketModel.quantity = parseInt(
      (<HTMLInputElement>document.getElementById('quantity-' + product.name))
        .value
    );
    (<HTMLInputElement>(
      document.getElementById('quantity-' + product.name)
    )).value = '1';


    this.baskets.push(basketModel);
    


    this.myEvent.emit({ data: this.baskets });
    
  }
}
