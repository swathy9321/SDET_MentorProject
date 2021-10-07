import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { MentorPageComponent } from './mentor-page/mentor-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MentorEditProfileComponent } from './mentor-edit-profile/mentor-edit-profile.component';
import { MentorViewRequestComponent } from './mentor-view-request/mentor-view-request.component';
import { MentorCoursesComponent } from './mentor-courses/mentor-courses.component';
import { AdminViewCourseComponent } from './admin-view-course/admin-view-course.component';
import { AdminAddCourseComponent } from './admin-add-course/admin-add-course.component';
import { AdminUpdateCourseComponent } from './admin-update-course/admin-update-course.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserPageComponent,
    MentorPageComponent,
    MentorEditProfileComponent,
    MentorViewRequestComponent,
    MentorCoursesComponent,
    AdminViewCourseComponent,
    AdminAddCourseComponent,
    AdminUpdateCourseComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
