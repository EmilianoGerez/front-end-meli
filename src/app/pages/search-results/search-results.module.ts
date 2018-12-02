import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultsRoutingModule } from './search-results-routing.module';
import { ItemComponent } from './item/item.component';
import { SearchResultsComponent } from './search-results.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, SearchResultsRoutingModule, SharedModule],
  declarations: [ItemComponent, SearchResultsComponent]
})
export class SearchResultsModule {}
