import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, ProductDetailsRoutingModule, SharedModule],
  declarations: [
    ProductDetailsComponent,
    ProductGalleryComponent,
    ProductInfoComponent,
    ProductDescriptionComponent
  ]
})
export class ProductDetailsModule {}
