import {Component} from '@angular/core';
import {Grade} from './child/child.component';


export interface Address {
  city: string
  street: string
  house: number
}


@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  grades: string[] = ['math: 5', 'english: 3']
  getGrade(garde: string) {
    this.grades.push(garde)
  }


}
