import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  imageSearch = new FormControl('');
  constructor(private search: SearchService) {}

  // Get the serach result
  searchGif() {
    this.search.fetchImages(this.imageSearch.value).subscribe(
      (result: any) => {
        this.search.setSearchData(result);
      },
      (err) => console.log('Error occured', err)
    );
  }
}
