import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  item:any[] = [
    {img:'../../../assets/pills.jpg', name: 'Panadol'},
    {img:'../../../assets/pills.jpg', name: 'Panadol'},
    {img:'../../../assets/pills.jpg', name: 'Panadol'},
    {img:'../../../assets/pills.jpg', name: 'Panadol'},
    {img:'../../../assets/pills.jpg', name: 'Panadol'},
    {img:'../../../assets/pills.jpg', name: 'Panadol'},
    {img:'../../../assets/pills.jpg', name: 'Panadol'},
    {img:'../../../assets/pills.jpg', name: 'Panadol'},
    {img:'../../../assets/pills.jpg', name: 'Panadol'},
  ]
}

