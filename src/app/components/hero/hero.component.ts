import { Component, Input } from '@angular/core'
import { HeroInfoModel } from '@components/hero/models/hero-info.model'
import { SocialLinksComponent } from '@components/social-links/social-links.component'
import { SocialLinksModel } from '@components/social-links/models/social-links.model'

@Component({
  selector: 'app-hero',
  imports: [
    SocialLinksComponent,
  ],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  @Input() public info!: HeroInfoModel

  @Input() public social!: SocialLinksModel
}
