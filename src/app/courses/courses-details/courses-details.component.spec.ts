import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CoursesDetailsComponent } from './courses-details.component';

describe('CoursesDetailsComponent', () => {
  let component: CoursesDetailsComponent;
  let fixture: ComponentFixture<CoursesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CoursesDetailsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesDetailsComponent);
    component = fixture.componentInstance;
    component.selectedCourse = {} as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
