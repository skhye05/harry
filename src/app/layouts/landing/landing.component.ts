import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [NgbCarouselConfig]
})
export class LandingComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.pauseOnHover = false;
  }

  ngOnInit() {

  }

  public myfunc() { }

}
