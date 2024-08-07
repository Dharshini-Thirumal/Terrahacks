import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SustainabilityTipsComponent } from './sustainability-tips/sustainability-tips.component';
import { CarbonFootprintCalculatorComponent } from './carbon-footprint-calculator/carbon-footprint-calculator.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { RewardsComponent } from './rewards/rewards.component';
import { ProgressTrackingComponent } from './progress-tracking/progress-tracking.component';
import { EducationalQuizzesComponent } from './educational-quizzes/educational-quizzes.component';
import { CommunityComponent } from './community/community.component';

export const routes: Routes = [
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