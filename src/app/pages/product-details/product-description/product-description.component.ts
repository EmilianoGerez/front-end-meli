import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html'
})
export class ProductDescriptionComponent implements OnInit {
  @Input() description: string;
  constructor() {}

  ngOnInit() {}
}
