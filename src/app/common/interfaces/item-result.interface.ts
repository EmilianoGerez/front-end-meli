export interface SearchResult {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: ItemResult[];
}

export interface ItemResult {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
}
