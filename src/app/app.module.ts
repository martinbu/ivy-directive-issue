import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container.component';
import { ContainerWrapperDirective } from './container-wrapper.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ContainerComponent, ContainerWrapperDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
