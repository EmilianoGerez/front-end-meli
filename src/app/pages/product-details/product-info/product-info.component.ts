import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html'
})
export class ProductInfoComponent implements OnInit {
  @Input() productInfo;
  constructor() {}

  ngOnInit() {}
}
