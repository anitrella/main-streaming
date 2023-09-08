import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentService } from './service/app.service';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, ContentComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ContentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
