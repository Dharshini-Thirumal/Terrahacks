import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../api.config';

@Component({
  selector: 'app-educational-quizzes',
  templateUrl: './educational-quizzes.component.html',
  styleUrls: ['./educational-quizzes.component.css']
})
export class EducationalQuizzesComponent implements OnInit {
  quizzes: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchQuizzes();
  }

  fetchQuizzes(): void {
    const apiUrl = ApiConfig.wolframAlphaApiUrls.educationalQuizzesApi;
    const appId = ApiConfig.wolframAlphaAppIds.educationalQuizzesApi;
    const params = {
      'input': 'sustainability quizzes',
      'podstate': 'Plaintext__Step-by-step solution',
      'cantimeout': '30'
    };

    this.http.get(`${apiUrl}?appid=${appId}`, { params }).subscribe((response: any) => {
      this.quizzes = response.pods[0].subpods.map((subpod: any) => subpod.plaintext);
    });
  }
}