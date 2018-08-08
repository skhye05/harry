import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ValuesComponent } from './values/values.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [LandingComponent, HeaderComponent, FooterComponent, ValuesComponent, AboutComponent, ContactUsComponent],
  exports: [LandingComponent, HeaderComponent, FooterComponent, ValuesComponent, AboutComponent, ContactUsComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LayoutsModule { }
