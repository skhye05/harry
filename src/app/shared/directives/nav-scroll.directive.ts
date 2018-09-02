import { Directive, Input, HostListener, ElementRef } from '@angular/core';

function _window(): Window {
  return window;
}

@Directive({
  selector: '[navScroll]'
})
export class NavScrollDirective {

  constructor(private el: ElementRef) { }

  
  @Input('navScroll') name: string;

  @HostListener('window:scroll', ['event']) scrollNavMoi(event) {
    const element = document.getElementById(this.name.toLowerCase()).offsetTop;
    const el = document.getElementById(this.name.toLowerCase());
    if(_window().pageYOffset >= element){

      this.removeActive();
      this.el.nativeElement.classList.add('active');
    }
  }

  private removeActive() {
    const parent = document.getElementById('menuNavbarToggler');
    const children = document.querySelectorAll('#menuNavbarToggler .nav-link');
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove('active');
    }
  }

}
