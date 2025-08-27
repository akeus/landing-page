import { Component } from '@angular/core'
import { EducationComponent } from '@sections/education/education.component'
import { HeaderComponent } from '@sections/header/header.component'

@Component({
  selector: 'app-profile',
  imports: [
    EducationComponent,
    HeaderComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {

}
