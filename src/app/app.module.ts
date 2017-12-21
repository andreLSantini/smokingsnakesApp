import { TimesComponent } from './times.component/times.component';
import { NoticiascomponentComponent } from './noticiascomponent.component/noticiascomponent.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent, NoticiascomponentComponent, TimesComponent ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
