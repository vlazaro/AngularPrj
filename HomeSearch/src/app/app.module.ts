import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/menu/navbar/navbar.component';
import { SaveComponent } from './components/menu/save/save.component';
import { LoginComponent } from './components/menu/login/login.component';
import { GooglemapComponent } from './components/body/googlemap/googlemap.component';
import { ViewpropComponent } from './components/body/viewprop/viewprop.component';
import { HomeComponent } from './components/body/home/home.component';
import { AgmCoreModule } from '@agm/core';
import { FiltroComponent } from './components/filtro/filtro.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SaveComponent,
    LoginComponent,
    GooglemapComponent,
    ViewpropComponent,
    HomeComponent,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey:  'AIzaSyDzdGdMzkl6wi2x7fYu1s5YGHLZwcn1zCI'

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
