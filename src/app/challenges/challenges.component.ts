import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../api.config';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {
  challengesData: any;
  currentChallenge: any;
  rewardsData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getChallenges();
    this.getRewards();
  }

  getChallenges(): void {
    const apiUrl = ApiConfig.wolframAlphaApiUrls.challengesApi;
    const appId = ApiConfig.wolframAlphaAppIds.challengesApi;

    this.http.get(`${apiUrl}?appid=${appId}`)
    .subscribe(response => {
        this.challengesData = response;
      });
  }

  getRewards(): void {
    const apiUrl = ApiConfig.wolframAlphaApiUrls.challengesApi;
    const appId = ApiConfig.wolframAlphaAppIds.challengesApi;
  
    this.http.get(`${apiUrl}?appid=${appId}`)
     .subscribe(response => {
        this.rewardsData = response;
      });
  }

  startChallenge(challenge: any): void {
    this.currentChallenge = challenge;
  }

  completeChallenge(): void {
    const updatedRewardsData = this.rewardsData.map((reward: any) => {
      if (reward.challengeId === this.currentChallenge.id) {
        return {
         ...reward,
          points: reward.points + this.currentChallenge.points
        };
      } else {
        return reward;
      }
    });

    this.rewardsData = updatedRewardsData;
  }
}