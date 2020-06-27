import { Component } from '@angular/core';
import { GameStateService } from './services/game-state.service';
import { OrdersService } from './services/orders.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	title = 'rx-pizzeria';
	public preppedPizzas: Array<any> = new Array<any>();
	public cookedPizzas: Array<any> = new Array<any>();

	constructor(public gameState: GameStateService, public orders: OrdersService) {}

	public gameRun() {
		this.gameState.run();
	}

	public gameStop() {
		this.gameState.stop();
	}

	public preppedPizzaReady(preppedPizza: any) {
		let clone: any = {};
		Object.assign(clone, preppedPizza);
		clone.uncooked = true;
		this.preppedPizzas.push(clone);
	}

	public pizzaToExpo(cookedPizza: any) {
		this.preppedPizzas = this.preppedPizzas.filter((pizza) => pizza != cookedPizza);
		this.cookedPizzas.push(cookedPizza);
		console.log(this.cookedPizzas);
	}
}
