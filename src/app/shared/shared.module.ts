import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from './services/item.service';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent],
  providers: [ItemService]
})
export class SharedModule {}
