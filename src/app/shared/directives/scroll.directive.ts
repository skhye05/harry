import { Directive, Input, HostListener, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

function _window(): Window {
  return window;
}

@Directive({
  selector: '[scrollTo]'
})
export class ScrollDirective {

  constructor(private el: ElementRef, @Inject(DOCUMENT) private document: any, ) { }

  @Input('scrollTo') section: string;

  @HostListener('click') onClick() {
    const el = document.getElementById(this.section.toLowerCase());
    this.removeActive();
    this.el.nativeElement.classList.add('active');
    setTimeout(() => {
      this.document.querySelector(`#${this.section}`).scrollIntoView({
        behavior: 'smooth',
        block: "start"
      });
    }, 200);
  }

  private scrollTo(posY: number, duration: number) {
    setTimeout(() => {
      _window().scrollTo(0, posY);
    }, duration);
    return;
  }

  private removeActive() {
    const parent = document.getElementById('menuNavbarToggler');
    const children = document.querySelectorAll('#menuNavbarToggler .nav-link');
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove('active');
    }
  }
}
