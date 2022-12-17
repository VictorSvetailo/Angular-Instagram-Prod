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
  @Output() sendGradeEvent = new EventEmitter<string>()

  inputGrade = ''
  sendGradeH() {
    this.sendGradeEvent.emit(this.inputGrade)
  }


}
