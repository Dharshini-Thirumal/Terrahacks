import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../api.config';

@Component({
  selector: 'app-sustainability-tips',
  templateUrl: './sustainability-tips.component.html',
  styleUrls: ['./sustainability-tips.component.css']
})
export class SustainabilityTipsComponent implements OnInit {
  tips: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchTips();
  }

  fetchTips(): void {
    const apiUrl = ApiConfig.wolframAlphaApiUrls.simpleApi;
    const appId = ApiConfig.wolframAlphaAppIds.simpleApi;
    const params = {
      'input': 'sustainability tips',
      'podstate': 'Plaintext__Step-by-step solution',
      'scantimeout': '30'
    };

    this.http.get(`${apiUrl}?appid=${appId}`, { params }).subscribe((response: any) => {
      this.tips = response.pods[0].subpods.map((subpod: any) => subpod.plaintext);
    });
  }
}