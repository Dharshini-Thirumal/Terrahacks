import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WolframAlphaSearchComponent } from './wolfram-alpha-search.component';

describe('WolframAlphaSearchComponent', () => {
  let component: WolframAlphaSearchComponent;
  let fixture: ComponentFixture<WolframAlphaSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WolframAlphaSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WolframAlphaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
