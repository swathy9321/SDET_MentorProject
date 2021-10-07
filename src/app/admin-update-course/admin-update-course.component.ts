import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-admin-update-course',
  templateUrl: './admin-update-course.component.html',
  styleUrls: ['./admin-update-course.component.css']
})
export class AdminUpdateCourseComponent implements OnInit {

  constructor(private mentorService: MentorService,private route: ActivatedRoute) { }
  id:string|null = '0';
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id= id;
  }
  updateCourse(course_name: string, desc: string){
    
    this.mentorService.updateCourse(this.id, {course_name,desc})
    .subscribe((res: any) => {
      console.log(res);
      // this.courses = res;
      
    });
  }

}
