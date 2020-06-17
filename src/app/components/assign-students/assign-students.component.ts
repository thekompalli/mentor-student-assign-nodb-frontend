import { Component, OnInit, DoCheck, OnDestroy, AfterViewInit } from '@angular/core';
import { MediateService } from 'src/app/services/mediate.service';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-assign-students',
  templateUrl: './assign-students.component.html',
  styleUrls: ['./assign-students.component.scss']
})
export class AssignStudentsComponent implements OnInit, OnDestroy, AfterViewInit {
  mentorsData;
  studentsData;
  isHidden = true;
  disableEvent;
  newForm;
  students_list;
  mentor_id:number;
  constructor(public ms: MediateService, private fb:FormBuilder, private router:Router) { 
    this.ms.getStudents();
    this.ms.getMentors()
   
    this.newForm = this.fb.group({
      id: this.fb.control(''),
      students: this.fb.array([], [Validators.required]),
    })

   

  }

  ngOnInit(): void {
  
    
  }
  ngAfterViewInit(){
   
  }

  ngOnDestroy(){
  
  }

  getStudentVal(id, name){
    this.newForm.id = new FormControl(id);
    this.mentor_id = id;
    this.isHidden = false;
   
  }



  detectChange(event){
    console.log(event.target.value)
    const formArray: FormArray = this.newForm.get('students') as FormArray;
    if (event.target.checked) {
    formArray.push(new FormControl(parseInt(event.target.value)))
    }
    else{
      let i = 0;
      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    console.log(this.newForm.value)
  }

  submit(){
    if(confirm("Continue?")){
      let obj=this.newForm.value;
      obj.id=this.mentor_id;
      console.log(this.newForm.value)
      this.ms.assignStudents(this.newForm.value)
      .subscribe(data => {
        this.ms.getStudents();
        alert(data['message']);
        window.location.reload();
      },
      err => {
       alert(err.error.message)
      })
     
    }
   
  }

}
