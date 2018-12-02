import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SearchResult } from '../interfaces/item-result.interface';
import { map } from 'rxjs/operators';
import { ItemDetail } from '../interfaces/item-detail.interface';

@Injectable()
export class ItemService {
  baseUrl = `${environment.API_LOCAL}/items`;
  constructor(private http: HttpClient) {}

  itemsSearch(query: string): Observable<SearchResult> {
    return this.http.get(`${this.baseUrl}?q=${query}`).pipe(map((res: SearchResult) => res));
  }

  getItemDetail(itemId: string): Observable<ItemDetail> {
    return this.http.get(`${this.baseUrl}/${itemId}`).pipe(map((res: ItemDetail) => res));
  }
}
