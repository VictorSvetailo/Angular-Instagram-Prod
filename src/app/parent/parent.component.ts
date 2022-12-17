import {Component} from '@angular/core';
import {Grade} from './child/child.component';

export interface WeekGrades {
  id: number
  gradeItem: number
}

export interface Lesson {
  id: number
  title: string
  weekGrades: WeekGrades[]
}


@Component({
  selector: 'inst-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  lessons: Lesson[] = [{
    id: 0,
    title: 'Math',
    weekGrades: [
      {id: 1, gradeItem: 5},
      {id: 2, gradeItem: 5},
      {id: 3, gradeItem: 5}
    ]
  },
    {
      id: 1,
      title: 'English',
      weekGrades: [
        {id: 1, gradeItem: 3},
        {id: 2, gradeItem: 2},
        {id: 3, gradeItem: 1}
      ],

    }
  ]

  getGrade(garde: string) {
    // this.grades.push(garde)
  }


}
