import { Component } from '@angular/core'
import { HeaderComponent } from '@sections/header/header.component'
import { ExperienceComponent } from '@sections/experience/experience.component'

@Component({
  selector: 'app-profile',
  imports: [
    HeaderComponent,
    ExperienceComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {

}
