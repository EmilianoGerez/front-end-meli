import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'items',
    loadChildren: './pages/search-results/search-results.module#SearchResultsModule'
  },
  {
    path: 'items/:id',
    loadChildren: './pages/product-details/product-details.module#ProductDetailsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
