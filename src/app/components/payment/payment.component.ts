import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  @Input() total: number;
  @Output() myEvent: EventEmitter<any> = new EventEmitter();

  payment() {
    this.myEvent.emit({ total: this.total });
  }
}
