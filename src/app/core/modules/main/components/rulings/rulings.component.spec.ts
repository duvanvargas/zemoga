import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulingsComponent } from './rulings.component';

describe('RulingsComponent', () => {
  let component: RulingsComponent;
  let fixture: ComponentFixture<RulingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
