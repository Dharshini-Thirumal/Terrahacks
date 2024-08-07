import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../api.config';

@Component({
  selector: 'app-carbon-footprint-calculator',
  templateUrl: './carbon-footprint-calculator.component.html',
  styleUrls: ['./carbon-footprint-calculator.component.css']
})
export class CarbonFootprintCalculatorComponent implements OnInit {
  carbonFootprintData: any;
  energyConsumption: number = 0;
  transportationHabits: string = '';
  wasteGeneration: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  calculateCarbonFootprint(): void {
    const apiUrl = ApiConfig.wolframAlphaApiUrls.instantCalculatorsApi;
    const appId = ApiConfig.wolframAlphaAppIds.instantCalculatorsApi;
    const params = {
      energyConsumption: this.energyConsumption,
      transportationHabits: this.transportationHabits,
      wasteGeneration: this.wasteGeneration
    };

    this.http.get(`${apiUrl}?appid=${appId}&${this.encodeParams(params)}`)
    .subscribe(response => {
        this.carbonFootprintData = response;
      });
  }

  encodeParams(params: any): string {
    return Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
  }
}