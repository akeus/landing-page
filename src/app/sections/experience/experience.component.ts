import { Component, Input } from '@angular/core'
import { WorkExperienceModel } from '@sections/experience/models/work-experience.model'
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-experience',
  imports: [
    NgIf,
  ],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  @Input() public title!: string

  @Input() public subtitle!: string

  @Input() public workExperience!: WorkExperienceModel[]
}
