import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMentorComponent } from './components/create-mentor/create-mentor.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { AssignStudentsComponent } from './components/assign-students/assign-students.component';
import { ChangeMentorComponent } from './components/change-mentor/change-mentor.component';
import { GetListComponent } from './components/get-list/get-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'create-mentor', pathMatch: 'full'},
  {path: 'create-mentor', component: CreateMentorComponent},
  {path: 'create-student', component: CreateStudentComponent},
  {path: 'assign-students', component: AssignStudentsComponent},
  {path: 'change-mentor', component:ChangeMentorComponent},
  {path: 'details', component:GetListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
