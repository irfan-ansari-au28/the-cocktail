import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCardShadow]',
})
export class CardShadowDirective {
  @Input('appCardShadow') shadowColor: string = 'rgba(0, 0, 0, 0.10)';

  @HostBinding('style.box-shadow') boxShadow: string = 'none';

  @HostListener('mouseenter') onMouseEnter() {
    this.boxShadow = `0px 10px 20px  ${this.shadowColor} !important`;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.boxShadow = `none`;
  }
}
