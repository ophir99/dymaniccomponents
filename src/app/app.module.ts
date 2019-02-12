import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoolComponent } from './cool/cool.component';

@NgModule({
  declarations: [
    AppComponent,
    CoolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [CoolComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
