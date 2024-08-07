import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalQuizzesComponent } from './educational-quizzes.component';

describe('EducationalQuizzesComponent', () => {
  let component: EducationalQuizzesComponent;
  let fixture: ComponentFixture<EducationalQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationalQuizzesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationalQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
