import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {ChildComponent} from './parent/child/child.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = []

@NgModule({
    imports: [RouterModule.forRoot(routes), FormsModule],
    exports: [RouterModule, ChildComponent],
    declarations: [
        ChildComponent
    ]
})
export class AppRoutingModule {}
