import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ORDERComponent } from './order.component';

describe('ORDERComponent', () => {
  let component: ORDERComponent;
  let fixture: ComponentFixture<ORDERComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ORDERComponent]
    });
    fixture = TestBed.createComponent(ORDERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
