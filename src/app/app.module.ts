import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { Test1Component } from './test1/test1.component'
import { Test2Component } from './test2/test2.component'
import { Test3Component } from './user/component/test3/test3.component'
import { Test4Component } from './user/component/test4/test4.component'
import { Test5Component } from './test5/test5.component'

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Test4Component,
    Test5Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
