import { Component } from '@angular/core'

interface IUser {
  age: number
  name: string
}

@Component({
  selector: 'inst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle = 'Instagram'
  user: IUser = {
    age: 32,
    name: 'Ivan',
  }
}
