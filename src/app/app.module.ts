import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
//import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { PostsComponent } from './posts/posts.component';
import { BooksComponent } from './books/books.component';
import { TempoComponent } from './tempo/tempo.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    PostsComponent,
    BooksComponent,
    TempoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // ,
    // RouterModule.forRoot([
    //   { 
    //     path: '', 
    //     component: TempoComponent
    //   },
    //   //{ path: 'courses/:name', component: CourseComponent}
    //   { 
    //     path: 'courses', 
    //     component: CoursesComponent
    //   },
    //   { 
    //     path: 'course', 
    //     component: CourseComponent
    //   },
    //   { 
    //     path: 'posts', 
    //     component: PostsComponent
    //   },
    //   { 
    //     path: 'books', 
    //     component: BooksComponent
    //   },
    //   { 
    //     path: '**', 
    //     component: NotFoundComponent
    //   }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
