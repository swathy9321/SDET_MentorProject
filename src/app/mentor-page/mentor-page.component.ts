import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from '../Courses';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-mentor-page',
  templateUrl: './mentor-page.component.html',
  styleUrls: ['./mentor-page.component.css']
})
export class MentorPageComponent {

  coursesId: Array<Courses> = []
  showMessage: boolean=false;
  constructor(private mentorService: MentorService) { }
  addCourses(course_name: string, desc: string, mentor_name: string, mentor_image: string){

    this.mentorService.addCourses({course_name,desc,mentor_name,mentor_image})
    .subscribe((res: any) => {
      this.showMessage= true;
      this.coursesId=res;
      console.log(res);
      
    });
  
  }

}
