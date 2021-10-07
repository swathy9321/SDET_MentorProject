import { Component, OnInit } from '@angular/core';
import { Courses } from '../Courses';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  courses: Array<Courses> = []
  constructor(private mentorService: MentorService) { }

  ngOnInit(): void {
    this.mentorService.fetchAllCourses()
    .subscribe((res:any) => {
      this.courses=res;
    });
  }

}
