import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent], //declare angular components
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent], //declare app entry point
})
export class AppModule {}
