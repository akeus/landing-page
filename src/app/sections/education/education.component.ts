import { Component } from '@angular/core'
import { ListItemsComponent } from '../../components/list-items/list-items.component'
import { ListType } from '../../components/list-items/models/list-type.enum'

@Component({
  selector: 'app-education',
  imports: [
    ListItemsComponent,
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  protected readonly ListType = ListType

  public collages: { id: number, name: string }[] = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
    { id: 4, name: 'D' },
  ]
}
