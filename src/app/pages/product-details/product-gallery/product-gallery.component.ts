import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html'
})
export class ProductGalleryComponent implements OnInit, OnChanges {
  @Input() pictures: string[] = [];
  @Input() imgAlt: string;
  mainPicture: string;
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.pictures.length > 0) {
      this.mainPicture = this.pictures[0];
    }
  }
}
