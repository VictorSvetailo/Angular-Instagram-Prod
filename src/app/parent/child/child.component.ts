import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Address} from '../parent.component';

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

  @Output() sendGradeEvent = new EventEmitter<number>()

  sendGradeH() {
    const math = 5
    this.sendGradeEvent.emit(math)
  }
}
