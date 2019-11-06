import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ]),
    FlexLayoutModule 
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    HeaderComponent, 
    BodyComponent, 
    FooterComponent, 
    CardComponent, 
    AboutComponent, HomeComponent 
  ],
  bootstrap:    [ 
    HeaderComponent, 
    BodyComponent, 
    FooterComponent 
  ]
})
export class AppModule { }
