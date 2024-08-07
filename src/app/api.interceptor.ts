import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfig } from './api.config';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestUrl = request.url;
    if (requestUrl.indexOf('@simpleApi')!== -1) {
      requestUrl = requestUrl.replace('@simpleApi', ApiConfig.wolframAlphaApiUrls.simpleApi);
    } else if (requestUrl.indexOf('@instantCalculatorsApi')!== -1) {
      requestUrl = requestUrl.replace('@instantCalculatorsApi', ApiConfig.wolframAlphaApiUrls.instantCalculatorsApi);
    } else if (requestUrl.indexOf('@summaryBoxesApi')!== -1) {
      requestUrl = requestUrl.replace('@summaryBoxesApi', ApiConfig.wolframAlphaApiUrls.summaryBoxesApi);
    } else if (requestUrl.indexOf('@challengesApi')!== -1) {
      requestUrl = requestUrl.replace('@challengesApi', ApiConfig.wolframAlphaApiUrls.challengesApi);
    } else if (requestUrl.indexOf('@fullResultsApi')!== -1) {
      requestUrl = requestUrl.replace('@fullResultsApi', ApiConfig.wolframAlphaApiUrls.fullResultsApi);
    } else if (requestUrl.indexOf('@educationalQuizzesApi')!== -1) {
      requestUrl = requestUrl.replace('@educationalQuizzesApi', ApiConfig.wolframAlphaApiUrls.educationalQuizzesApi);
    } else if (requestUrl.indexOf('@conversationalApi')!== -1) {
      requestUrl = requestUrl.replace('@conversationalApi', ApiConfig.wolframAlphaApiUrls.conversationalApi);
    }

    request = request.clone({
      url: requestUrl,
    });

    return next.handle(request);
  }
}