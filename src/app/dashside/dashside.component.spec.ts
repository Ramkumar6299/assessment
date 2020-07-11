import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashsideComponent } from './dashside.component';

describe('DashsideComponent', () => {
  let component: DashsideComponent;
  let fixture: ComponentFixture<DashsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
