import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioDetailsComponent } from './portfolio/portfolio-details/portfolio-details.component';
import { ResumeComponent } from './resume/resume.component';

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  // ...any other options you'd like to use
};

@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule, 
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'portfolio/:path', component: PortfolioDetailsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'resume', component: ResumeComponent },
    ],
    routerOptions,
    ),
    FlexLayoutModule,
    NgCircleProgressModule.forRoot({
      radius: 50,
      clockwise: false,
      backgroundColor: "var(--sec-color)",
      titleColor: "var(--light-color)",
      unitsColor: "var(--light-color)",
      titleFontSize: "20",
      unitsFontSize: "15",
      outerStrokeWidth: 40,
      outerStrokeColor: "var(--main-color)",
      outerStrokeLinecap: "butt",
      innerStrokeColor: "var(--dark-color)",
      innerStrokeWidth: 0,
      titleFontWeight: "900",
      animationDuration: 1000,
      showSubtitle: false
    })
  ],
  declarations: [  
    HeaderComponent, 
    BodyComponent, 
    FooterComponent, 
    CardComponent, 
    AboutComponent, 
    HomeComponent, 
    PortfolioComponent, 
    ContactComponent, 
    PortfolioDetailsComponent, ResumeComponent 
  ],
  bootstrap:    [ 
    HeaderComponent, 
    BodyComponent, 
    FooterComponent 
  ]
})
export class AppModule { }
