import { Component, OnInit } from '@angular/core';
import { Courses } from '../Courses';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-admin-view-course',
  templateUrl: './admin-view-course.component.html',
  styleUrls: ['./admin-view-course.component.css']
})
export class AdminViewCourseComponent implements OnInit {

  showMessage: boolean=false;
  courses: Array<Courses> = []
  constructor(private mentorService: MentorService) { }

  ngOnInit(): void {
    this.viewCourses();
  }

  deleteCourse(id: number){
    this.mentorService.deleteCourse(id)
    .subscribe((res: any) => {
      // console.log(res);
      // this.courses = res;
      let remainingCourses= this.courses.filter(courses => courses.id != id)
      this.courses = remainingCourses;
      this.showMessage= true;
    });
  }
  viewCourses(){
    this.mentorService.fetchAllCourses()
    .subscribe((res: any) => {
      
      this.courses = res;
    });
  }


}
