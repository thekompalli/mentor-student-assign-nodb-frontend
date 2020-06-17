import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';
import { MediateService } from 'src/app/services/mediate.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit, DoCheck {
  studentForm: FormGroup;

  constructor(private fb:FormBuilder, 
              private http:HttpClient,
              private ms:MediateService) { 

    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      subject: ['', Validators.required]
    })
  }

  ngOnInit(): void {
   
   
    
  }

  ngDoCheck(){
  
  }


  onSubmit(){
      this.ms.createStudent(this.studentForm.value)
      .subscribe(data => {
        alert(data['message'])
      })
  }

}
