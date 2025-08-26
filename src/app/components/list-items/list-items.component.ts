import { Component, Input } from '@angular/core'
import { ListType } from './models/list-type.enum'
import { NgTemplateOutlet } from '@angular/common'

@Component({
  selector: 'app-list-items',
  imports: [
    NgTemplateOutlet,
  ],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.scss',
})
export class ListItemsComponent {
  @Input() type!: ListType

  @Input() items!: { id: number, name: string }[]

  protected readonly ListType = ListType
}
