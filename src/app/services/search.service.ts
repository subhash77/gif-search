import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  dataSource = new Subject<any>();
  imageData = this.dataSource.asObservable();
  constructor(private http: HttpClient) {}

  fetchImages(searchText) {
    let url = `http://api.giphy.com/v1/gifs/search?api_key=${environment.apiKey}&q=${searchText}&limit=45`;
    return this.http.get(url);
  }

  setSearchData(data: any) {
    this.dataSource.next(data);
  }

  getSearchData() {
    return this.imageData;
  }
}
