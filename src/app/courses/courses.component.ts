import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {


  selectedCourse = null;

  courses = null;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.loadcourses();
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };

    this.selectedCourse = emptyCourse;
  }

  loadcourses() {
    this.coursesService
      .all()
      .subscribe((coursesData) => (this.courses = coursesData));
  }

  refreshCourses() {
    this.resetSelectedCourse();
    this.loadcourses();
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  saveCourse(course) {
    course.id
      ? this.coursesService
          .update(course)
          .subscribe((result) => this.refreshCourses())
      : this.coursesService
          .create(course)
          .subscribe((result) => this.refreshCourses());
  }

  deleteCourse(courseId) {
    this.coursesService
      .delete(courseId)
      .subscribe((result) => this.refreshCourses());
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
