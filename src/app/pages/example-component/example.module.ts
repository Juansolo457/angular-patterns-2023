import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example.component';

/* NOTE: you have to watch the imports, don't bring in duplicates, you could get
 * runtime and not compile time errors that could not be very clear why..*/

@NgModule({
  declarations: [ExampleComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ExampleRoutingModule,
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
  ],
})
export class ExamplesModule {}
