import { Directive, ElementRef, OnInit } from '@angular/core';


@Directive({
    // Pass these to the directive
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective  implements OnInit {
    constructor(private elementRef: ElementRef) {

    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}