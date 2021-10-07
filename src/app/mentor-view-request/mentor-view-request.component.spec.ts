import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorViewRequestComponent } from './mentor-view-request.component';

describe('MentorViewRequestComponent', () => {
  let component: MentorViewRequestComponent;
  let fixture: ComponentFixture<MentorViewRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorViewRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorViewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
