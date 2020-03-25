import { Component, Input, OnInit, Optional, Host } from '@angular/core';
import {ElementDef} from './model';
import { ContainerWrapperDirective } from './container-wrapper.directive';
@Component({
  selector: 'app-container',
  template: `
    <div appContainerWrapper *ngIf="element">
      <p>Container: {{element.name}}</p>
      <app-container [element]="element.child"></app-container>
    </div>
  `
})
export class ContainerComponent implements OnInit {

  private static containerCount = 0;
  private static colors = [
    'yellow', 'green', 'lightblue', 'red'
  ];

  @Input() element: ElementDef;

  constructor(@Optional() @Host() private directive: ContainerWrapperDirective) {}

  ngOnInit(): void {
    if (this.directive !== null) {
      this.directive.update(ContainerComponent.colors[ContainerComponent.containerCount++]);
    } else if (ContainerComponent.containerCount > 0) {
      console.log('No parent directive for: ', this.element.name);
      console.log('In angular 8 this case never happens! But in angular 9 the directive is not available in nested containers. :(');
    }
  }
}
