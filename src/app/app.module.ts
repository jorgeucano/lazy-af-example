import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LazyModule} from '@herodevs/lazy-af';
import {MyNotlazyComponent} from './mynotlazy.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNotlazyComponent
  ],
  imports: [
    BrowserModule,
    LazyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
