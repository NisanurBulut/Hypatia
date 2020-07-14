import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// third party imports
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { HomeComponent } from './home/home.component';
import { SafePipe } from './Utility/safe.pipe';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailComponent,
    SafePipe,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    // ngx-bootstrap
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
