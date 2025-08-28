import { Component, inject } from '@angular/core'
import { HeaderComponent } from '@sections/header/header.component'
import { ExperienceComponent } from '@sections/experience/experience.component'
import { HeroComponent } from '@components/hero/hero.component'
import { ProfileService } from '@services/profile.service'

@Component({
  selector: 'app-profile',
  imports: [
    HeaderComponent,
    ExperienceComponent,
    HeroComponent,
  ],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  public readonly profile = inject(ProfileService).getProfile()
}
