import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainabilityTipsComponent } from './sustainability-tips.component';

describe('SustainabilityTipsComponent', () => {
  let component: SustainabilityTipsComponent;
  let fixture: ComponentFixture<SustainabilityTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SustainabilityTipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SustainabilityTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
