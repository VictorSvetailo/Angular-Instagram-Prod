import { Component } from '@angular/core';


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
  name = "Ivan"
  lastName = 'Petrov'
  address: Address = {
    city: 'Minsk',
    street: 'Platonova',
    house: 49,
  }
}