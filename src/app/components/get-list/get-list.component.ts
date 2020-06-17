import { Component, OnInit } from '@angular/core';
import { MediateService } from 'src/app/services/mediate.service';

@Component({
  selector: 'app-get-list',
  templateUrl: './get-list.component.html',
  styleUrls: ['./get-list.component.scss']
})
export class GetListComponent implements OnInit {

  constructor(public ms:MediateService) { }
  heads = ['id', 'name']

  ngOnInit(): void {
    console.log(this.ms.unfiltered_students_list)
  }

}
