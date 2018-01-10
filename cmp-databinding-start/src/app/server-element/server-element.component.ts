import {
  Component,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterViewInit,
  SimpleChanges,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;

  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log(this.header.nativeElement.textContent);
  }

}
