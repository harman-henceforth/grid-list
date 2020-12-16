import { selectProductsIsLoading, selectProductsListing } from './store/selectors/products.selectors';
import { ProductsState } from './store/reducers/product.state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { actionsGetProductsListing } from './store/actions/products.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grid-list';
  is_grid: boolean = false
  products$ = this.store.select(selectProductsListing);
  productsLoading$ = this.store.select(selectProductsIsLoading);
  constructor(private store: Store<ProductsState>) {
    this.store.dispatch(actionsGetProductsListing())
    this.products$.subscribe(res => {
      console.log(res)
    })
  }
  clicked(e) {
    console.log(e)
  }
}
