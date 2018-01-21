import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dragdrop]'
})
export class DragdropDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.draggable = true;
    
    console.log('attributes of tile - ', el.nativeElement.attributes)
    console.log('children of tile - ', el.nativeElement)
    // el.nativeElement.children foreach(element => {
    //   element.draggable = true;
    // });
    let div = el.nativeElement.querySelector('div')
    console.log('div - ',div);
    this.el.nativeElement.style.position = "absolute";

    // this.el.nativeElement.style.top = this.el.nativeElement.offsetTop;

  }

  @HostListener('click', ['$event']) onClick(event: Event) {
    console.log('click');
    // this.el.nativeElement.style.top = "40px";
    // this.el.nativeElement.style.color = "red";

    event.stopPropagation();

  }

  @HostListener('dragenter', ['$event']) onMouseEnter(event: Event) {
    console.log('dragenter ', event);
    console.log('top - ', this.el.nativeElement.style.top);
    
    // this.el.nativeElement.style.top = "1px" ;

    console.log('rect ', this.el.nativeElement.getBoundingClientRect());

    

    event.stopPropagation();
  }
}
