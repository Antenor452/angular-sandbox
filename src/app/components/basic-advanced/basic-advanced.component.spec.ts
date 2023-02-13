import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAdvancedComponent } from './basic-advanced.component';

describe('BasicAdvancedComponent', () => {
  let component: BasicAdvancedComponent;
  let fixture: ComponentFixture<BasicAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicAdvancedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
