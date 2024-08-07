import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from './api.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getSimpleApiData(data: any) {
    const url = `${ApiConfig.wolframAlphaApiUrls.simpleApi}?appid=${ApiConfig.wolframAlphaAppIds.simpleApi}&input=${data}`;
    return this.http.get(url);
  }

  getInstantCalculatorsData(data: any) {
    const url = `${ApiConfig.wolframAlphaApiUrls.instantCalculatorsApi}?appid=${ApiConfig.wolframAlphaAppIds.instantCalculatorsApi}&input=${data}`;
    return this.http.get(url);
  }

  getSummaryBoxesData(data: any) {
    const url = `${ApiConfig.wolframAlphaApiUrls.summaryBoxesApi}?appid=${ApiConfig.wolframAlphaAppIds.summaryBoxesApi}&input=${data}`;
    return this.http.get(url);
  }

  getChallengesData(data: any) {
    const url = `${ApiConfig.wolframAlphaApiUrls.challengesApi}?appid=${ApiConfig.wolframAlphaAppIds.challengesApi}&input=${data}`;
    return this.http.get(url);
  }

  getFullResultsData(data: any) {
    const url = `${ApiConfig.wolframAlphaApiUrls.fullResultsApi}?appid=${ApiConfig.wolframAlphaAppIds.fullResultsApi}&input=${data}`;
    return this.http.get(url);
  }

  getEducationalQuizzesData(data: any) {
    const url = `${ApiConfig.wolframAlphaApiUrls.educationalQuizzesApi}?appid=${ApiConfig.wolframAlphaAppIds.educationalQuizzesApi}&input=${data}`;
    return this.http.get(url);
  }

  getConversationalData(data: any) {
    const url = `${ApiConfig.wolframAlphaApiUrls.conversationalApi}?appid=${ApiConfig.wolframAlphaAppIds.conversationalApi}&input=${data}`;
    return this.http.get(url);
  }

  getTips(): Observable<any> {
    const url = `${ApiConfig.wolframAlphaApiUrls.simpleApi}?appid=${ApiConfig.wolframAlphaAppIds.simpleApi}`;
    return this.http.get(url);
  }

}