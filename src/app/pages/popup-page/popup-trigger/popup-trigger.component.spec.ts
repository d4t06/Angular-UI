import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTriggerComponent } from './popup-trigger.component';

describe('PopupTriggerComponent', () => {
  let component: PopupTriggerComponent;
  let fixture: ComponentFixture<PopupTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupTriggerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
