import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms';
import {ParentComponent} from './parent/parent.component';
import { NgClassComponent } from './ng-class/ng-class.component';

@NgModule({
  declarations: [AppComponent, ParentComponent, NgClassComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
