import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appContainerWrapper]'
})
export class ContainerWrapperDirective {
    constructor(private containerWrapperRef: ElementRef, private renderer: Renderer2) {
    }

    update(color: string): void {
        const nativeElement = this.containerWrapperRef.nativeElement;
        this.renderer.setStyle(nativeElement, 'background-color', color);
    }
}
