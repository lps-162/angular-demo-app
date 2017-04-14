import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjaDetailComponent } from './ninja-detail.component';

describe('NinjaDetailComponent', () => {
  let component: NinjaDetailComponent;
  let fixture: ComponentFixture<NinjaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinjaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinjaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
