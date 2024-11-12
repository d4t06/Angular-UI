import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiVariantComponent } from './multi-variant.component';

describe('MultiVariantComponent', () => {
  let component: MultiVariantComponent;
  let fixture: ComponentFixture<MultiVariantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiVariantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
