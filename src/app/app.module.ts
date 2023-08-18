import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapExampleComponent } from './pages/bootstrap-example/bootstrap-example.component';
import { RandomUserService } from './shared/services/random-user.service';
import { ResultsComponent } from './pages/results/results.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, BootstrapExampleComponent, ResultsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatRippleModule,
    FormsModule,
    MatCheckboxModule,
    NgbInputDatepicker,
    HttpClientModule,
    NoopAnimationsModule,
    RouterModule,
    RouterOutlet,
  ],
  providers: [RandomUserService],
})
export class AppModule {}
