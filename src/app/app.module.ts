import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'contact', component: ContactComponent },
    ]),
    FlexLayoutModule 
  ],
  declarations: [  
    HeaderComponent, 
    BodyComponent, 
    FooterComponent, 
    CardComponent, 
    AboutComponent, 
    HomeComponent, 
    PortfolioComponent, 
    ContactComponent 
  ],
  bootstrap:    [ 
    HeaderComponent, 
    BodyComponent, 
    FooterComponent 
  ]
})
export class AppModule { }
