import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { BannerAboutComponent } from './components/about/banner-about/banner-about.component';
import { ContentAboutComponent } from './components/about/content-about/content-about.component';
import { CardActivitiesComponent } from './components/activities/card-activities/card-activities.component';
import { SliderActivitiesComponent } from './components/activities/slider-activities/slider-activities.component';
import { AdvicesComponent } from './components/counseling/advices/advices.component';
import { BannerCounselingComponent } from './components/counseling/banner-counseling/banner-counseling.component';


import { HomeComponent } from "./pages/home/home.component";
import { BlogComponent } from './pages/blog/blog.component';
import { PrayerMotiveComponent } from './pages/prayer-motive/prayer-motive.component';
import { CounselingComponent } from "./pages/counseling/counseling.component";
import { ActivitiesComponent } from "./pages/activities/activities.component"
import { AppRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './components/home/banner/banner.component';
import { ArticlesComponent } from './components/home/articles/articles.component';
import { SlideshowMainComponent } from './components/home/slideshow-main/slideshow-main.component';

import { HttpClientModule } from "@angular/common/http";
import { DetailsComponent } from './components/counseling/details/details.component';
import { CounselingDetailsComponent } from './pages/counseling-details/counseling-details.component';


//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

//Paginacion
import { NgxPaginationModule } from "ngx-pagination";
import { ExternalLinksComponent } from './components/activities/external-links/external-links.component';
import { OtherComponent } from './components/counseling/other/other.component';
import { ActivitiesDetailsComponent } from './pages/activities-details/activities-details.component';

// Importamos Sweet Alert
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ActivitiesComponent,
    FooterComponent,
    MenuComponent,
    BlogComponent,
    PrayerMotiveComponent,
    HomeComponent,
    BannerAboutComponent,
    ContentAboutComponent,
    CardActivitiesComponent,
    SliderActivitiesComponent,
    AdvicesComponent,
    BannerCounselingComponent,
    CounselingComponent,
    BannerComponent,
    ArticlesComponent,
    SlideshowMainComponent,
    DetailsComponent,
    CounselingDetailsComponent,
    ExternalLinksComponent,
    OtherComponent,
    ActivitiesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
