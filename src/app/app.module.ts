import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateMentorComponent } from './components/create-mentor/create-mentor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { ReactiveFormsModule, FormsModule }from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AssignStudentsComponent } from './components/assign-students/assign-students.component';
import { ChangeMentorComponent } from './components/change-mentor/change-mentor.component';
import { GetListComponent } from './components/get-list/get-list.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateMentorComponent,
    CreateStudentComponent,
    AssignStudentsComponent,
    ChangeMentorComponent,
    GetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
