import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-cook',
	templateUrl: './cook.component.html',
	styleUrls: [ './cook.component.scss' ]
})
export class CookComponent implements OnInit {
	@Input() gameState: Observable<boolean>;
	@Input() preppedPizzas: Array<any>;
	@Output() pizzaToExpo: EventEmitter<any> = new EventEmitter<any>();
	constructor() {}

	ngOnInit(): void {}

	public pizzaCooked(pizza: any) {
		pizza.uncooked = false;
	}

	public sendToExpo(pizza: any) {
		this.pizzaToExpo.emit(pizza);
	}
}
