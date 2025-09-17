import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../product';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [RouterLink, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  products: Product[] = [];
  editProduct: any = null;

  private productService = inject(ProductService)
  declare bootstrap: any

  ngOnInit(): void {
    this.productService.fetchProducts().subscribe({
      next:(products: Product[]) => {
        this.products = products;
      },
      error: (err: any) => {
        console.error('Add product error:', err);
      },
      complete: () => {
        console.log('Product added completed.');
      }
    })
  }

  removeProduct(product: Product, event: any) {
    event.preventDefault();
    const _id = product._id
    this.productService.removeProduct(_id).subscribe({
      next: () => {
        console.log('Deleted product successfully.')
        this.products.filter(p => p._id !== _id)
      }
    })
  }

  openEdit(product: Product, event: any) {
    event.preventDefault();
    this.editProduct = { ...product }
  }

  saveEdit() {
    const _id = this.editProduct._id ;
    const price = this.editProduct.price;
    const units = this.editProduct.units;
    
    this.productService.updateProduct(_id, price, units).subscribe({
      next: () => {
        console.log('Updated product successfully.')
        const selected = this.products.find(p => p._id === _id)
        if (selected) {
          selected.price = price;
          selected.units = units;
        }
      }
    })
  }
}
