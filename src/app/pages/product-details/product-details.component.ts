import { Component, OnInit, Inject, AfterContentInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../common/services/item.service';
import { WINDOW, LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  itemPictures: string[] = [];
  itemInfo;
  itemDescription: string;
  categories: string[];
  loadData = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
    @Inject(WINDOW) private window: Window,
    @Inject(LOCAL_STORAGE) private localStorage: any,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const id: string = params['id'];
        if (!id) {
          this.failureRedirect();
        }
        this.getItem(id);
      },
      err => this.failureRedirect()
    );

    this.getCategories();
  }

  failureRedirect() {
    this.router.navigate(['/']);
  }

  getItem(itemId: string) {
    this.itemService.getItemDetail(itemId).subscribe(
      ({ author, item, item: { description, picture } }) => {
        this.itemInfo = item;
        this.itemDescription = description;
        this.itemPictures = picture.split('-*-');
        this.loadData = true;
        this.setTitle(item);
      },
      err => {
        this.failureRedirect();
      }
    );
  }

  getCategories() {
    this.categories = this.window.localStorage.getItem('categories').split(',');
  }

  setTitle({ title, price: { amount, decimals } }) {
    this.title.setTitle(`${title} - $ ${amount},${decimals} - Mercado Libre Argentina`);
  }
}
