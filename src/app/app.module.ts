import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FlexLayoutModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, BodyComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
