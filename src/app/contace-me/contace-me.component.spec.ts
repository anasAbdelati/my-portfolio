import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaceMeComponent } from './contace-me.component';

describe('ContaceMeComponent', () => {
  let component: ContaceMeComponent;
  let fixture: ComponentFixture<ContaceMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContaceMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContaceMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
