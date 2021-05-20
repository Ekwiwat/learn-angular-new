import { Component, OnInit } from '@angular/core';
import { faGifts, faDumbbell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  categoryMen = ['Men\'s Fasion', 'Mobile Devices', 'suplementary', 'Watches \& Glasses', 'Men\'s Shoes', 'Computer \& Laptop', 'Cameras', 'sports', 'Enterainment', 'Games']
  categoryWomen = ['Women\'s Fasion', 'Beauty', 'Baby Products', 'House Supplies', 'Bags', 'Women\'s Shoes', 'Accesseries', 'Food \& Baverage', 'Electric Supplies', 'Pets']

  constructor() { }

  ngOnInit(): void {
  }
  faGifts = faGifts
  faDumbbell = faDumbbell

}
