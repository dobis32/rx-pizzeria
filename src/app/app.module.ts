import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrepComponent } from './prep/prep.component';
import { CookComponent } from './cook/cook.component';
import { ProgressBarComponent } from './util/progress-bar/progress-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpoComponent } from './expo/expo.component';
import { CookedPizzaComponent } from './cooked-pizza/cooked-pizza.component';

@NgModule({
	declarations: [ AppComponent, PrepComponent, CookComponent, ProgressBarComponent, ExpoComponent, CookedPizzaComponent ],
	imports: [ BrowserModule, FormsModule, ReactiveFormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
