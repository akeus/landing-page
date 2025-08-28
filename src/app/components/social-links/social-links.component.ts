import { Component, Input } from '@angular/core'
import { SocialLinksModel } from '@components/social-links/models/social-links.model'
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-social-links',
  imports: [
    NgIf,
  ],
  templateUrl: './social-links.component.html',
})
export class SocialLinksComponent {
  @Input() links!: SocialLinksModel
}
