import { ProductsService } from '../../services/products.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import {
    actionsGetProductsListing, actionsGetProductsListingSuccess, actionsGetProductsListingError
} from './../actions/products.actions';

@Injectable()
export class ProductsEffects {
    constructor(
        private actions$: Actions,
        private productService: ProductsService,
    ) { }

    getProductsListing = createEffect(() =>
        this.actions$.pipe(
            ofType(actionsGetProductsListing),
            concatMap(() => {
                return this.productService.getProductsListing().pipe(
                    map((response) =>
                        actionsGetProductsListingSuccess({
                            response: response,
                        })
                    ),
                    catchError((error) => of(actionsGetProductsListingError({ error })))
                );
            })
        )
    );

}
