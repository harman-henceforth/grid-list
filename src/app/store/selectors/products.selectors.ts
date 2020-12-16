import { selectProductState } from './../main.state';
import { createSelector } from '@ngrx/store';
import * as fromProducts from "../reducers/product.state";

export const selectProducts = createSelector(
    selectProductState,
    (state:any ) => state
);
export const selectProductsListing = createSelector(
    selectProducts,
    fromProducts.selectAll
);
export const selectProductsIsLoading = createSelector(
    selectProducts,
    fromProducts.getProductsIsLoading
);