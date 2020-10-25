import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  errorMessage = 'Your search result will be show here.';
  imageData = [];

  constructor(private serach: SearchService) {}

  ngOnInit(): void {
    this.serach.getSearchData().subscribe((result: any) => {
      if (result && result.data.length) {
        this.errorMessage = '';
        this.imageData = result.data;
      } else {
        this.imageData = [];
        this.errorMessage = 'No Gif images found.';
      }
    });
  }
}
