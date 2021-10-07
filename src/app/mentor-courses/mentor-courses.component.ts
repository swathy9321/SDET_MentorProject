import { Component, OnInit } from '@angular/core';
import { Courses } from '../Courses';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-mentor-courses',
  templateUrl: './mentor-courses.component.html',
  styleUrls: ['./mentor-courses.component.css']
})
export class MentorCoursesComponent implements OnInit {

  courses: Array<Courses> = []
  constructor(private mentorService: MentorService) { }

  ngOnInit(): void {
    this.mentorService.fetchAllCourses()
    .subscribe((res:any) => {
      this.courses=res;
    });
  }

}
