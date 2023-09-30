import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/components/header/header.component';
import { FooterButtonComponent } from 'src/components/footer-button/footer-button.component';
import { ContentComponent } from 'src/components/content/content.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HeaderComponent,
    FooterButtonComponent,
    ContentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
