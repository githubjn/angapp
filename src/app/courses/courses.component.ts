import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = "List of courses";
  courses;

  constructor(service: CoursesService) { 
    this.courses = service.getCourses();
  }

  ngOnInit(): void {
  }

}
