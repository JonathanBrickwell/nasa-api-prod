import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_components/_shared/header/header.component';
import { HomepageComponent } from './_components/homepage/homepage.component';
import { FooterComponent } from './_components/_shared/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { AstronomyPictureFeatureComponent } from './_components/_features/astronomy-picture-feature/astronomy-picture-feature.component';
import { AboutComponent } from './_components/_pages/about/about.component';
import { MarsRoverComponent } from './_components/_features/mars-rover/mars-rover.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AstronomyPictureFeatureComponent,
    AboutComponent,
    MarsRoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
