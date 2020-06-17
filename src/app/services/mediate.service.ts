import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediateService{

  students_list;
  mentors_list;
  unfiltered_students_list;

  constructor(private http:HttpClient) {
    this.getStudents();
    this.getMentors();
   }
   

  createStudent(data){
    return this.http.post('https://mentor-student-assign-nodb.herokuapp.com/create-student', data)
  }

  createMentor(data){
    return this.http.post('https://mentor-student-assign-nodb.herokuapp.com/create-mentor', data)
  }

  getStudents(){
     this.http.get('https://mentor-student-assign-nodb.herokuapp.com/students-list')
    .subscribe(data => {
      let lst = [];
      this.unfiltered_students_list = data['students'];
      data['students'].forEach(i => {
        if(i.mentor === 'NONE'){
         lst.push(i)
        }
      })
      this.students_list = lst;
      return of(true)
    },
    err => {
      console.log(err)
    }
    )
   
   
  }
  getMentors(){
    return this.http.get('https://mentor-student-assign-nodb.herokuapp.com/mentors-list')
    .subscribe(data => {
      this.mentors_list = data['mentors'];
    }, 
    err => {
      console.log(err)
    })
  
  }

  assignStudents(data){
    return this.http.post('https://mentor-student-assign-nodb.herokuapp.com/student-mentor-assign', data)
  }

  updateMentor(data){
    return this.http.post('https://mentor-student-assign-nodb.herokuapp.com/update-mentor', data)
  }

  
}
