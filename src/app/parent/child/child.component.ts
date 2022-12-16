import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Address} from '../parent.component';


export interface Grade {
  math: number
  physic: number
}

@Component({
  selector: 'inst-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  name = 'Victor'
  // aliasing
  @Input('lastName') lastNameProps?: string
  @Input() address?: Address

  @Output() sendGradeEvent = new EventEmitter<Grade>()

  sendGradeH() {
    const math = 5
    const physic = 4
    this.sendGradeEvent.emit({math, physic})
  }
}
