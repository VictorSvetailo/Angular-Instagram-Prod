import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {ChildComponent} from './parent/child/child.component';

const routes: Routes = []

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule, ChildComponent],
    declarations: [
        ChildComponent
    ]
})
export class AppRoutingModule {}
