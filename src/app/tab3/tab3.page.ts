import { Component } from '@angular/core';
import { EstudianteService } from "../services/estudiante.service";
import { Estudiante } from '../models/estudiante';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public students:Estudiante[];

  constructor(private service:EstudianteService) {
    this.service.getStudents().subscribe(data=>{
      this.students=data.map(e=>{
        return{
          id:e.payload.doc.id,
          name:e.payload.doc.get("name"),
          controlnumber:e.payload.doc.get("controlnumber"),
          curp:e.payload.doc.get("curp"), 
          age:e.payload.doc.get("age"),
          active:e.payload.doc.get("active")
        }as Estudiante
      })
    })
  }

}
 