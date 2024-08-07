import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../api.config';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {
  rewardsData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRewards();
  }

  getRewards(): void {
    const apiUrl = ApiConfig.wolframAlphaApiUrls.challengesApi;
    const appId = ApiConfig.wolframAlphaAppIds.challengesApi;

    this.http.get(`${apiUrl}?appid=${appId}`)
     .subscribe(response => {
        this.rewardsData = response;
      });
  }
}