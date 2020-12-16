
import { ActionReducerMap } from '@ngrx/store';
import { ProductsState,productReducer } from './reducers/product.state';
export interface ProductModuleState {
    products: ProductsState;
}
export interface ModuleState {
    productsModule: ProductModuleState;
}
export const reducers: ActionReducerMap<ProductModuleState> = {
    products: productReducer,
};
export const selectProductState = (state: any) => {
    return state.products;
};