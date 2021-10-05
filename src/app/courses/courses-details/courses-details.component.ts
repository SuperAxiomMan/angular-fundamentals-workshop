import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.scss'],
})
export class CoursesDetailsComponent {
  editableCourse;
  originalTitle;

  @Input() set selectedCourse(value) {
    if (value) {

      this.editableCourse = Object.assign({}, value);
      this.originalTitle = value.title;
    }
  }
  @Output() saveCourse = new EventEmitter();
  @Output() cancel = new EventEmitter();
}
