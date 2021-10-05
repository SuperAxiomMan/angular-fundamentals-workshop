import { Component, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss'],
})
export class LessonsListComponent {
  title = 'lessons list';

  @Input() lessons;
  @Output() selectedLesson = new EventEmitter();
}
