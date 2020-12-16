import { Product } from './../../models/Product';
import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() products: Product[]
  @Output() productClicked = new EventEmitter<Product>();

  clickProduct(value: Product) {
    this.productClicked.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
