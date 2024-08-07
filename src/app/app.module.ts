import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SustainabilityTipsComponent } from './sustainability-tips/sustainability-tips.component';
import { CarbonFootprintCalculatorComponent } from './carbon-footprint-calculator/carbon-footprint-calculator.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { RewardsComponent } from './rewards/rewards.component';
import { ProgressTrackingComponent } from './progress-tracking/progress-tracking.component';
import { EducationalQuizzesComponent } from './educational-quizzes/educational-quizzes.component';
import { CommunityComponent } from './community/community.component';
import { ApiConfig } from './api.config';
import { ApiService } from './api.service';
import { SustainabilityService } from './sustainability.service';
import { ChallengesService } from './challenges.service';
import { RewardsService } from './rewards.service';
import { ProgressTrackingService } from './progress-tracking.service';
import { WolframAlphaSearchComponent } from './wolfram-alpha-search/wolfram-alpha-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sustainability-tips', component: SustainabilityTipsComponent },
  { path: 'carbon-footprint-calculator', component: CarbonFootprintCalculatorComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'rewards', component: RewardsComponent },
  { path: 'progress-tracking', component: ProgressTrackingComponent },
  { path: 'educational-quizzes', component: EducationalQuizzesComponent },
  { path: 'community', component: CommunityComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SustainabilityTipsComponent,
    CarbonFootprintCalculatorComponent,
    ChallengesComponent,
    RewardsComponent,
    ProgressTrackingComponent,
    EducationalQuizzesComponent,
    CommunityComponent,
    WolframAlphaSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    ApiConfig,
    ApiService,
    SustainabilityService,
    ChallengesService,
    RewardsService,
    ProgressTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }