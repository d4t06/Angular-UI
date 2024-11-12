import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MultiVariantComponent } from '../../components/multi-variant/multi-variant.component';
import { Observable, from, of } from 'rxjs';
import { ButtonComponent } from '../../components/button/button.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MultiVariantComponent, ButtonComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  // myObservable = new Observable((observer) => {
  //   observer.next(1);
  //   observer.next(2);
  // });

  test = 'test class'

  constructor(private http: HttpClient) {
    console.log('home constructor');
  }

  arr1 = [1, 2, 3, 4];

  data = new Promise<any>((rs) => rs(this.arr1));

  products: Product[] = [];
  page = 1;

  pageSize = 5;

  myObservable = of(this.data);

  isFetching = false;

  // http: HttpClient = inject(HttpClient);

  getProducts() {
    this.isFetching = true;
    this.http
      .get<Product[]>(
        `https://fakestoreapi.com/products?limit=5`
      )
      .subscribe(
        (res) => this.products.push(...res),
        () => {},
        () => (this.isFetching = false)
      );
  }

  getMore() {
    this.page += 1;
    this.getProducts();
  }

  ngOnInit() {
    // this.getProducts();
  }

  async run() {
    this.myObservable.subscribe((val: any) => {
      console.log(val);
    });

    console.log(await this.data);
  }
}
