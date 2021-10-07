import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddCourseComponent } from './admin-add-course/admin-add-course.component';
import { AdminUpdateCourseComponent } from './admin-update-course/admin-update-course.component';
import { AdminViewCourseComponent } from './admin-view-course/admin-view-course.component';
import { HomeComponent } from './home/home.component';
import { MentorCoursesComponent } from './mentor-courses/mentor-courses.component';
import { MentorEditProfileComponent } from './mentor-edit-profile/mentor-edit-profile.component';
import { MentorPageComponent } from './mentor-page/mentor-page.component';
import { MentorViewRequestComponent } from './mentor-view-request/mentor-view-request.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'mentor', component: MentorPageComponent},
  {path: 'mentor_edit_profile', component: MentorEditProfileComponent},
  {path: 'mentor_view_request', component: MentorViewRequestComponent},
  {path: 'mentor-courses', component:MentorCoursesComponent},
  {path: 'admin', component: AdminViewCourseComponent},
  {path: 'add-course', component:AdminAddCourseComponent},
  {path: 'update-course', component:AdminUpdateCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
