import { Component } from '@angular/core'
import { HeroComponent } from '@components/hero/hero.component'

@Component({
  selector: 'app-header',
  imports: [
    HeroComponent,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

}
