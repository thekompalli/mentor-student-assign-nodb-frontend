import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MediateService } from 'src/app/services/mediate.service';

@Component({
  selector: 'app-create-mentor',
  templateUrl: './create-mentor.component.html',
  styleUrls: ['./create-mentor.component.scss']
})
export class CreateMentorComponent implements OnInit {
  mentorForm: FormGroup;
  constructor(private fb:FormBuilder, private http:HttpClient, private ms:MediateService) {
    this.mentorForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      subject: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
      this.ms.createMentor(this.mentorForm.value)
      .subscribe(data => {
        alert(data['message'])
      })
  
  }

}
