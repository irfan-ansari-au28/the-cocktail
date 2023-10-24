import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBackgroundHeighlight]',
})
export class AppBackgroundHeighlightDirective {
  @Input('appBackgroundHeighlight') bgColor: any;

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.bgColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'transparent';
  }
}
