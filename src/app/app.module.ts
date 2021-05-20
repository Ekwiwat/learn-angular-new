import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { CountingComponent } from './components/counting/counting.component';
import { Lab4Component } from './components/lab4/lab4.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlideshowModule } from 'ng-simple-slideshow';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { Home2Component } from './components/home2/home2.component';
import { SearchBar2Component } from './components/search-bar2/search-bar2.component';
import { CardBodyComponent } from './components/card-body/card-body.component';




@NgModule({
  declarations: [
    AppComponent, HomeComponent, CountingComponent, Lab4Component, NavbarComponent, TopBannerComponent, CategoryMenuComponent, SearchBarComponent, ToDoListComponent, Navbar2Component, Home2Component, SearchBar2Component, CardBodyComponent
  ],
  imports: [
    BrowserModule, FormsModule, FontAwesomeModule, SlideshowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
