import { Component } from '@angular/core';

//, OnInit
//import { IProduct } from './product';
//import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
  //styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {

 //// implements OnInit

  pageTitle :string = 'Product List';
  products: any[] = [

    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    }
  ];
  imageWidth : number= 50;
  imageMargin : number= 2;
  showImage: boolean = false;
  listFilter: string = 'cart';
 // errorMessage = '';

 // _listFilter = '';
 // get listFilter(): string {
 //   return this._listFilter;
 // }
 // set listFilter(value: string) {
 //   this._listFilter = value;
 //   this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
 // }

 // filteredProducts: IProduct[] = [];
 // products: IProduct[] = [];

 // constructor(private productService: ProductService) {

 // }

 // onRatingClicked(message: string): void {
 //   this.pageTitle = 'Product List: ' + message;
 // }

 // performFilter(filterBy: string): IProduct[] {
 //   filterBy = filterBy.toLocaleLowerCase();
 //   return this.products.filter((product: IProduct) =>
 //     product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
 // }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

 // ngOnInit(): void {
 //   this.productService.getProducts().subscribe(
 //     products => {
 //       this.products = products;
 //       this.filteredProducts = this.products;
 //     },
 //     error => this.errorMessage = <any>error
 //   );
 // }
}
