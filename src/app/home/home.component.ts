import { Component, OnInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    // new Splide( '.splide' ).mount();
    var splide = new Splide( '.splide', {
      type   : 'loop',
      drag   : 'free',
      snap   : true,
      perPage: 3,
      rewind : true,
    } );
    
    splide.mount();
  }

  categories: any[] = [
    {categoryName: 'Oral Druggs', categoryImgPath:'assets/images/pills.jpg' },
    {categoryName: 'Oral Druggs', categoryImgPath:'assets/images/pills.jpg' },
    {categoryName: 'Oral Druggs', categoryImgPath:'assets/images/pills.jpg' },
    {categoryName: 'Oral Druggs', categoryImgPath:'assets/images/pills.jpg' },
    {categoryName: 'Oral Druggs', categoryImgPath:'assets/images/pills.jpg' },
    {categoryName: 'Oral Druggs', categoryImgPath:'assets/images/pills.jpg' },
  ]

  slides: any[] = [
    {distributorName: 'Karma',id:1},
    {distributorName: 'AliExpress', id:2},
    {distributorName: 'Karma',id:3},
    {distributorName: 'Moamen',id:4},
    {distributorName: 'Elsadek',id:5},
    {distributorName: 'Raheek',id:6},
  ]

}
