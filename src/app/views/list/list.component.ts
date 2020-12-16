import { Product } from './../../models/Product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() products: Product[]
  constructor() { }
  @Output() productClicked = new EventEmitter<Product>();

  clickProduct(value: Product) {
    this.productClicked.emit(value);
  }
  ngOnInit(): void {
  }

}
