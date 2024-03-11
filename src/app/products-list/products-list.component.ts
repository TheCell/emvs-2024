import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../api/dummyapi/product';
import { DummyService } from '../api/dummyapi/dummy.service';
import { Subject, tap, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductsListComponent implements OnInit, OnDestroy {
  public products: Array<Product> = [];

  private loadNext = new Subject();
  private loadProducts$ = this.loadNext.pipe(
    tap(() => console.log('click')),
    switchMap(() => this.dummyService.getProducts())
  );

  private subscription = this.loadProducts$.subscribe((res) => {
    console.log('Resources loaded:', res);
    this.products = res;
  });

  constructor(private dummyService: DummyService) {}

  ngOnInit() {
    this.loadNext.next(null);
  }

  public onClick() {
    this.loadNext.next(null);
    // we send 2 requests to demonstrated canceling
    this.loadNext.next(null);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
