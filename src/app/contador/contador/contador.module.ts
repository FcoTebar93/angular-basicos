import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { ContadorComponent } from './contador.component';



@NgModule({
  declarations: [
    ContadorComponent,
  ],
  exports: [
    ContadorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ContadorModule { }
