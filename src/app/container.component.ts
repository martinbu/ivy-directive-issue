import { Component, Input, OnInit, Optional, Host, SkipSelf } from '@angular/core';
import {ElementDef} from './model';
import { ContainerWrapperDirective } from './container-wrapper.directive';
@Component({
  selector: 'app-container',
  template: `
    <div appContainerWrapper *ngIf="element">
      <p>Container: {{element.name}}</p>
      <app-container [element]="element.child" [parentName]="element.name"></app-container>
    </div>
  `
})
export class ContainerComponent implements OnInit {

  private static containerCount = 0;
  private static colors = [
    'yellow', 'green', 'lightblue', 'red'
  ];

  @Input() element?: ElementDef;
  @Input() parentName?: string;

  constructor(@Optional() @SkipSelf() @Host() private directive: ContainerWrapperDirective) {}

  ngOnInit(): void {
    if (this.directive !== null) {
      console.log('update color for ' + this.parentName)
      this.directive.update(ContainerComponent.colors[ContainerComponent.containerCount++]);
    } else if (ContainerComponent.containerCount > 0) {
      console.log('No parent directive for: ', this.parentName);
      console.log('In angular 8 this case never happens! But since angular 9 the directive is not available in nested containers. :(');
    }
  }
}
