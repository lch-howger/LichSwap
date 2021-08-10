import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageSwapComponent} from "./page-swap/page-swap.component";
import {PageLiquidityComponent} from "./page-liquidity/page-liquidity.component";

const routes: Routes = [
  {path: 'swap', component: PageSwapComponent},
  {path: 'liquidity', component: PageLiquidityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
