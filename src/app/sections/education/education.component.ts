import { Component } from '@angular/core'
import { College } from '@sections/education/models/college.model'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  public collages: College[] = [
    {
      id: 2,
      name: 'Harmon Hall',
      career: 'Ingles A1 - B2',
      start: '2025',
      end: 'actualidad',
    },
    {
      id: 1,
      name: 'Universidad tecnologica de cancun',
      career: 'Ingenieria en tecnologias de la informacion y telecomunicaciones',
      start: '2011',
      end: '2013',
    },
  ]
}
