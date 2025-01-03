import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTabBtnComponent } from './change-tab-btn.component';

describe('ChangeTabBtnComponent', () => {
  let component: ChangeTabBtnComponent;
  let fixture: ComponentFixture<ChangeTabBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeTabBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeTabBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
