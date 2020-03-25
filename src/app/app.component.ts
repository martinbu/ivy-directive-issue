import { Component } from '@angular/core';
import { ElementDef } from './model';

@Component({
  selector: 'app-root',
  template: `
    <app-container [element]="ui"></app-container>
  `
})
export class AppComponent  {
  ui: ElementDef = {
    name: 'container1', child: {
      name: 'container2', child: {
        name: 'container3', child: {
          name: 'container4'
        }
      }
    }
  };
}
