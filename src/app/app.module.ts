import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { Err404Component } from './pages/err404/err404.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NewsComponent } from './pages/news/news.component';
import { TestComponent } from './pages/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    WelcomeComponent,
    NavbarComponent,
    Err404Component,
    FooterComponent,
    NewsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
