import { Component } from '@angular/core';
// import Splide from '@splidejs/splide';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  
  ngOnInit(): void {
  // new Splide( '.splide' ).mount();
    // var splide = new Splide( '.splide', {
    //   type   : 'loop',
    //   drag   : 'free',
    //   snap   : true,
    //   perPage: 3,
    //   rewind : true,
    // } );
    
    // splide.mount();
}



categories: any[] = [
  {categoryName: 'Oral Druggs', categoryImgPath:'../../../assets/pills.jpg' },
  {categoryName: 'Oral Druggs', categoryImgPath:'../../../assets/pills.jpg' },
  {categoryName: 'Oral Druggs', categoryImgPath:'../../../assets/pills.jpg' },
  {categoryName: 'Oral Druggs', categoryImgPath:'../../../assets/pills.jpg' },
  {categoryName: 'Oral Druggs', categoryImgPath:'../../../assets/pills.jpg' },
  {categoryName: 'Oral Druggs', categoryImgPath:'../../../assets/pills.jpg' },
]

slides: any[] = [
  {distributorName: 'Karma'},
  {distributorName: 'AliExpress'},
  {distributorName: 'Dalida'},
  {distributorName: 'Elsadek'},
  {distributorName: 'Eman'},
  {distributorName: 'Raheek'},
]


}
