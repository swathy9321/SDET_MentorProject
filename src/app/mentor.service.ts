import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  constructor(private http: HttpClient) { }

  fetchAllCourses(){
    return this.http.get(environment.baseUrl);
  }

  addCourses(course: any){
    return this.http.post( environment.baseUrl, course)
  }

  deleteCourse(id: number){
    return this.http.delete( environment.baseUrl + id)
  }
  
  updateCourse(id: string|null, course: any){
    return this.http.patch( environment.baseUrl + id, course)
  }
}
