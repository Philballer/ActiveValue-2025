import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyInfoComponent } from './body-info.component';

describe('BodyInfoComponent', () => {
  let component: BodyInfoComponent;
  let fixture: ComponentFixture<BodyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
