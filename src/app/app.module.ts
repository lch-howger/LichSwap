import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';
import { PageSwapComponent } from './page-swap/page-swap.component';
import { PageLiquidityComponent } from './page-liquidity/page-liquidity.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationBarComponent,
    PageSwapComponent,
    PageLiquidityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
