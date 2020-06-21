import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrepComponent } from './prep/prep.component';
import { CookComponent } from './cook/cook.component';
import { ProgressBarComponent } from './util/progress-bar/progress-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [ AppComponent, PrepComponent, CookComponent, ProgressBarComponent ],
	imports: [ BrowserModule, FormsModule, ReactiveFormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
