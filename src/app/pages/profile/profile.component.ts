import { Component } from '@angular/core'
import { EducationComponent } from '../../sections/education/education.component'
import { ExperienceComponent } from '../../sections/experience/experience.component'

@Component({
  selector: 'app-profile',
  imports: [
    EducationComponent,
    ExperienceComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {

}
