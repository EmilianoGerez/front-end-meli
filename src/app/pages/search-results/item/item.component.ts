import { Component, OnInit, Input } from '@angular/core';
import { ItemDetail } from 'src/app/shared/interfaces/item-detail.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
  @Input() item: ItemDetail;
  constructor() {}

  ngOnInit() {}
}
