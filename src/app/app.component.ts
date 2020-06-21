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
	constructor(public gameState: GameStateService, public orders: OrdersService) {}

	public gameRun() {
		this.gameState.run();
	}

	public gameStop() {
		this.gameState.stop();
	}
}
