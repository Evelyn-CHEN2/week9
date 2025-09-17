import { Routes } from '@angular/router';
import { Products } from '../components/products/products';
import { AddProducts } from '../components/add-products/add-products';
import { UpdateProduct } from '../components/update-product/update-product'

export const routes: Routes = [
    {
        path: '', component: Products
    },
    {
        path: 'products', component: Products
    },
    {
        path: 'addproduct', component: AddProducts
    },
    {
        path: 'updateproduct/:id', component: UpdateProduct
    }
];
