import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemResult } from 'src/app/shared/interfaces/item-result.interface';
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent implements OnInit {
  categories: string[] = [];
  itemList: ItemResult[] = [];
  loadData = false;
  constructor(private route: ActivatedRoute, private itemService: ItemService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(({ search }) => {
      this.getItems(search);
    });
  }

  getItems(search: string): void {
    this.loadData = false;
    this.itemService.itemsSearch(search).subscribe(
      ({ author, categories, items }) => {
        this.categories = categories;
        this.itemList = items;
        this.storageCategories(categories);
        this.loadData = true;
      },
      err => console.log(err)
    );
  }

  storageCategories(categories) {
    sessionStorage.setItem('categories', categories);
  }
}
