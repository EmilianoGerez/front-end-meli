import { Component, OnInit, Input } from '@angular/core';
import { ItemResult } from '../../../common/interfaces/item-result.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
  @Input() item: ItemResult;
  constructor() {}

  ngOnInit() {}
}
