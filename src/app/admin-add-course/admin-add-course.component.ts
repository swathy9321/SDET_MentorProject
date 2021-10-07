import { Component, OnInit } from '@angular/core';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-admin-add-course',
  templateUrl: './admin-add-course.component.html',
  styleUrls: ['./admin-add-course.component.css']
})
export class AdminAddCourseComponent  {

  showMessage: boolean=false;
  constructor(private mentorService: MentorService) { }
  addCourses(course_name: string){

    this.mentorService.addCourses({course_name})
    .subscribe((res: any) => {
      this.showMessage= true;
      
    });
  
  }
}
