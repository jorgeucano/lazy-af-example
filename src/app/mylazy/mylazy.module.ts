import {RouterModule, Routes} from '@angular/router';
import {MylazyComponent} from './mylazy.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {path: '', component: MylazyComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [MylazyComponent],
  bootstrap: [MylazyComponent]
})

export class MylazyModule {}
