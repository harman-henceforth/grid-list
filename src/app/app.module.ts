import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ProductsEffects } from './store/effects/products.effects';
import { reducers } from './store/main.state';
import { ListComponent } from './views/list/list.component';
import { GridComponent } from './views/grid/grid.component';
import { CommonModule } from '@angular/common';
import { TimePipe } from './pipes/time.pipe';

// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    TimePipe,
    ListComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,    
    CommonModule,
    StoreModule.forRoot(reducers),
    HttpClientModule,
    // StoreDevtoolsModule.instrument({ name: 'Products' }),
    EffectsModule.forRoot([ProductsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
