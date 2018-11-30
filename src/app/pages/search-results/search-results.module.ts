import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultsRoutingModule } from './search-results-routing.module';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { SearchResultsComponent } from './search-results.component';

@NgModule({
  imports: [
    CommonModule,
    SearchResultsRoutingModule
  ],
  declarations: [ItemListComponent, ItemComponent, SearchResultsComponent]
})
export class SearchResultsModule { }
