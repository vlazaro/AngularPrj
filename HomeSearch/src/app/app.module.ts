import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/menu/navbar/navbar.component';
import { SaveComponent } from './components/menu/save/save.component';
import { LoginComponent } from './components/menu/login/login.component';
import { SearchComponent } from './components/filtros/search/search.component';
import { ComboComponent } from './components/filtros/combo/combo.component';
import { GooglemapComponent } from './components/body/googlemap/googlemap.component';
import { ViewpropComponent } from './components/body/viewprop/viewprop.component';
import { HomeComponent } from './components/body/home/home.component';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SaveComponent,
    LoginComponent,
    SearchComponent,
    ComboComponent,
    GooglemapComponent,
    ViewpropComponent,
    HomeComponent
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
