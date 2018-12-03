import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultsRoutingModule } from './search-results-routing.module';
import { ItemComponent } from './item/item.component';
import { SearchResultsComponent } from './search-results.component';
import { SharedCommonModule } from '../../common/shared-common.module';

@NgModule({
  imports: [CommonModule, SearchResultsRoutingModule, SharedCommonModule],
  declarations: [ItemComponent, SearchResultsComponent]
})
export class SearchResultsModule {}
