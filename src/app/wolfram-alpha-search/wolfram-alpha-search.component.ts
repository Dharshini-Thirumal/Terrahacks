import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-wolfram-alpha-search',
  templateUrl: './wolfram-alpha-search.component.html',
  styleUrls: ['./wolfram-alpha-search.component.css']
})
export class WolframAlphaSearchComponent implements OnInit {
  searchQuery: string = '';
  results: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.apiService.getSimpleApiData({ input: this.searchQuery })
     .subscribe((data: any) => {
        this.results = data;
      });
  }
}