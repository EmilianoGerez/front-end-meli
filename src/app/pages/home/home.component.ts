import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Mercado Libre Argentina');
    meta.addTags([
      {
        name: 'description',
        content: 'La comunidad de compra y venta online más grande de América Latina.'
      },
      {
        name: 'author',
        content: 'www.mercadolibre.com.ar'
      },
      {
        name: 'keywords',
        content: 'compra, venta, online, argentina'
      }
    ]);
  }
  ngOnInit() {}
}
