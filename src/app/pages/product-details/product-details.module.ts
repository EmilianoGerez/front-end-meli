import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { SharedCommonModule } from '../../common/shared-common.module';

@NgModule({
  imports: [CommonModule, ProductDetailsRoutingModule, SharedCommonModule],
  declarations: [
    ProductDetailsComponent,
    ProductGalleryComponent,
    ProductInfoComponent,
    ProductDescriptionComponent
  ]
})
export class ProductDetailsModule {}
