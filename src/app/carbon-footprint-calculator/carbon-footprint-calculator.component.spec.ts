import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonFootprintCalculatorComponent } from './carbon-footprint-calculator.component';

describe('CarbonFootprintCalculatorComponent', () => {
  let component: CarbonFootprintCalculatorComponent;
  let fixture: ComponentFixture<CarbonFootprintCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarbonFootprintCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarbonFootprintCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
