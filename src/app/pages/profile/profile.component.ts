import { Component } from '@angular/core'
import { HeaderComponent } from '@sections/header/header.component'
import { ExperienceComponent } from '@sections/experience/experience.component'
import { HeroComponent } from '@components/hero/hero.component'

@Component({
  selector: 'app-profile',
  imports: [
    HeaderComponent,
    ExperienceComponent,
    HeroComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {

}
