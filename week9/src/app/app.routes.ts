import { Routes } from '@angular/router';
import { Products } from '../components/products/products';
import { AddProducts } from '../components/add-products/add-products';

export const routes: Routes = [
    {
        path: '', component: Products
    },
    {
        path: 'products', component: Products
    },
    {
        path: 'addproduct', component: AddProducts
    }
];
