import { GoogleAnalyticsService } from './../services/services/google-analytics.service';
import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {

  title = "List of courses";
  courses;
  
  constructor(
    private service: CoursesService,
    public googleAnalyticsService: GoogleAnalyticsService
    ) { 
    this.courses = service.getCourses();
  }

  ngOnInit(): void {  }

  SendAddToCartEvent(){ 
    //....
    this.googleAnalyticsService.eventEmitter("add_to_cart", "shop", "cart", "click", 10);
  } 

}
