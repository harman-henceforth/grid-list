import { Product as productActions } from './../../models/Product';
import { createAction, props } from '@ngrx/store';

export const actionsGetProductsListing = createAction(
    '[Products] Get Products',
);
export const actionsGetProductsListingSuccess = createAction(
    '[Products] Get Products Success',
    props<{ response?: productActions[] }>()

);
export const actionsGetProductsListingError = createAction(
    '[Products] Get Products Error',
    props<{ error?: any }>()
);
