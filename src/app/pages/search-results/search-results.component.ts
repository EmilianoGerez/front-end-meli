import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemResult } from '../../common/interfaces/item-result.interface';
import { ItemService } from '../../common/services/item.service';
import { WINDOW, LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent implements OnInit {
  categories: string[] = [];
  itemList: ItemResult[] = [];
  loadData = false;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    @Inject(WINDOW) private window: Window,
    @Inject(LOCAL_STORAGE) private localStorage: any,
    private meta: Meta,
    private title: Title
  ) {}

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

        this.setTitle(search, categories);
        this.setMetas(search, categories, author);
      },
      err => console.log(err)
    );
  }

  storageCategories(categories) {
    // this.localStorage.setItem('categories', categories);
    this.window.localStorage.setItem('categories', categories);
  }

  setTitle(title: string, categories: string[]) {
    const category = this.categories[this.categories.length - 1];
    this.title.setTitle(`${title.toUpperCase()} - ${category} - Mercado Libre Argentina`);
  }

  setMetas(title: string, categories: string[], { name, lastname }) {
    const cats = categories.join(', ');
    this.meta.updateTag({
      name: 'description',
      content: `${title} - ${categories[0]} - Mercado Libre Argentina`
    });

    this.meta.updateTag({
      name: 'author',
      content: `${name} ${lastname}`
    });

    this.meta.updateTag({
      name: 'keywords',
      content: `${title}, ${cats}`
    });
  }
}
