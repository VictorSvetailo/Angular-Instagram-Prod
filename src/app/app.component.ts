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
  isAppLoading = true

  constructor() {
    setTimeout(() => {
      this.isAppLoading = false
    }, 2000)
  }

  //Event binding
  text = ''
  textTwoWayBinding = 'Hello'
  textFormsModuleH = 'FormsModule Text'
  changeTitleH() {
    this.appTitle = 'IT-INC'
  }
  changeTextH(event: Event) {
    this.text = (event.currentTarget as HTMLInputElement).value
  }
  //Two way binding
  changeTextTwoWayBindingH(event: Event) {
    this.textTwoWayBinding = (event.currentTarget as HTMLInputElement).value
  }
}
