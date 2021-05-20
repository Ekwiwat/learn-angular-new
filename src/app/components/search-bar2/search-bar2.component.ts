import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-search-bar2',
  templateUrl: './search-bar2.component.html',
  styleUrls: ['./search-bar2.component.css']
})
export class SearchBar2Component implements OnInit {
  faSearch = faSearch
  constructor() { }

  ngOnInit(): void {
  }

}
