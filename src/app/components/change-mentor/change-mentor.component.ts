import { Component, OnInit } from '@angular/core';
import { MediateService } from 'src/app/services/mediate.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-change-mentor',
  templateUrl: './change-mentor.component.html',
  styleUrls: ['./change-mentor.component.scss']
})
export class ChangeMentorComponent implements OnInit {
  isHidden = true;
  mentorId;
  studentId;
  updateForm;

  constructor(public ms:MediateService, private fb:FormBuilder) { 
    this.updateForm = this.fb.group({
      mentorId: this.fb.control(''),
      studentId: this.fb.control('')
    })
  }

  ngOnInit(): void {
  }

  getStudentVal(id){
    this.isHidden = false
    this.updateForm.studentId = new FormControl(id);
    this.studentId = id;
  }
  getMentorVal(id){
    this.updateForm.mentorId = new FormControl(id);
    this.mentorId = id;
    let obj=this.updateForm.value;
    obj.mentorId = this.mentorId;
    obj.studentId = this.studentId;
    if(confirm("Are you sure, do want to update?")){
      this.ms.updateMentor(this.updateForm.value)
      .subscribe(data => {
        console.log(data['message'])
      },
      err => {
        console.log(err)
      })
    }
  
  }

}
