import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/shared/services/item.service';
import { ItemDetail } from 'src/app/shared/interfaces/item-detail.interface';

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
    private itemService: ItemService
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
    this.router.navigate(['/']); // FIXME: do component for not page
  }

  getItem(itemId: string) {
    this.itemService.getItemDetail(itemId).subscribe(
      ({ author, item, item: { description, picture } }) => {
        this.itemInfo = item;
        this.itemDescription = description;
        this.itemPictures = picture.split('-*-');
        this.loadData = true;
      },
      err => {
        this.failureRedirect(); // FIXME: do component for not page
      }
    );
  }

  getCategories() {
    this.categories = sessionStorage.getItem('categories').split(',');
  }
}
