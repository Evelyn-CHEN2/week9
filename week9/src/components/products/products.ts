import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  products: Product[] = [];

  private productService = inject(ProductService)

  ngOnInit(): void {
    this.productService.fetchProducts().subscribe({
      next:(products: Product[]) => {
        this.products = products;
      }
    })
  }

}
