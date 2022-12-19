import { Component } from '@angular/core';

@Component({
  selector: 'inst-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent {
  isSuccess = false

  constructor() {
    setTimeout(()=>{
      this.isSuccess = true
    },2000)
  }
}
