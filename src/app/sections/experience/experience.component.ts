import { Component } from '@angular/core'
import { WorkExperience } from '@sections/experience/models/work-experience.model'
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-experience',
  imports: [
    NgIf,
  ],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  public workExperience: WorkExperience[] = [
    {
      id: 1,
      company: 'World2Meet',
      position: 'Software Engineer III',
      from: 'agosto 2024',
      to: 'junio 2025',
      summary: 'Diseño de soluciones con arquitectura de microservicios.',
      tasks: [
        'Diseño de soluciones con arquitectura de microservicios.',
        'Desarrollo de features/hotfix en APIs .NET Core.',
      ],
      skills: [
        'Angular',
        'NodeJS',
        'NestJS',
        'Azure DevOps',
        'Micro-frontend',
      ],
    },
    {
      id: 2,
      company: 'Despegar',
      position: 'Software Engineer III',
      from: 'abril 2022',
      to: 'julio 2024',
      summary: '',
      tasks: [
        'Diseño de soluciones con arquitectura de microservicios.',
        'Gestion de colas de eventos con kafka.',
      ],
      skills: [
        '.NET',
        'Micro-servicios',
        'Github Actions',
        'SOLID',
        'Liderazgo',
        'Sistemas distribuidos',
      ],
    },
  ]
}
