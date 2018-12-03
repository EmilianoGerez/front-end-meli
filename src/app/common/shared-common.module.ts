import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from './services/item.service';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { ThousandsPipe } from './pipes/thousands.pipe';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BreadcrumbComponent, ThousandsPipe],
  exports: [BreadcrumbComponent, ThousandsPipe],
  providers: [ItemService]
})
export class SharedCommonModule {}
