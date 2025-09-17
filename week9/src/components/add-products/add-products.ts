import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { FormsModule } from '@angular/forms';
import { Product } from '../../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  imports: [FormsModule],
  templateUrl: './add-products.html',
  styleUrl: './add-products.css'
})
export class AddProducts {
  name: string = '';
  description: string = '';
  price: number = 0;
  units: number = 0;

  private productService = inject(ProductService)
  private router = inject(Router)

  addProduct(event:any) {
    event.preventDefault();
    this.productService.fetchProducts().subscribe(products => {
      const maxId = products.reduce((max, p) => max > p.id ? max : p.id, 0)
      console.log('max: ', maxId)
      const product = {
        id: maxId + 1,
        name: this.name.trim(),
        description: this.description.trim(),
        price: this.price,
        units: this.units
      }
      this.productService.addProduct(product).subscribe({
        next: (data)=> {
          if (data) {
            console.log('Added new product successfully.')
          }
          this.router.navigate(['products'])
        }
      })
    })  
  }
}
