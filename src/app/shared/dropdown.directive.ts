import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  //Renderer2 approach can be replaced with @HostBinding
  //@HostBinding('class.open')
  isOpen = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick(event: Event){
    this.isOpen = !this.isOpen;
    if(this.isOpen) {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    }
  }
}
