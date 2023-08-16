import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './pages/example-component/example.component';

// TODO: Add / update app routing with lazy loading and use example component as '/'
@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ExampleComponent],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule, MatToolbarModule, MatIconModule],
  providers: [],
})
export class AppModule {}
