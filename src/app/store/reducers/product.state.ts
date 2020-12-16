import { createReducer, Action, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { EntityState } from '@ngrx/entity';
import * as productActions from '../actions/products.actions';
import { Product } from '../../models/Product';
export interface ProductsState extends EntityState<Product> {
  isProductsLoading: boolean;
}
export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product) => product.productId,
});
const initialProductState: ProductsState = productAdapter.getInitialState({
    isProductsLoading: true,
});
export const reducer = createReducer(
  initialProductState,
  on(productActions.actionsGetProductsListing, (state) => ({
    ...state,
    isProductsLoading: true,
  })),
  on(productActions.actionsGetProductsListingSuccess, (state, { response }) => ({
    ...state,
    ...productAdapter.setAll(response, state),
    isProductsLoading: false,
  })),
  on(productActions.actionsGetProductsListingError, (state, { error }) => ({
    ...state,
    isProductsLoading: false,
  }))
);
export const {
  selectTotal,
  selectAll,
  selectIds,
  selectEntities,
} = productAdapter.getSelectors();
export function productReducer(state: ProductsState | undefined, action: Action) {
  return reducer(state, action);
}
export const getProductsIsLoading = (state: ProductsState) => {
  return state.isProductsLoading;
};