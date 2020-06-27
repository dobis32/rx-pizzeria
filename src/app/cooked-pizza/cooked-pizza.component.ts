import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-cooked-pizza',
	templateUrl: './cooked-pizza.component.html',
	styleUrls: [ './cooked-pizza.component.scss' ]
})
export class CookedPizzaComponent implements OnInit {
	@Input() pizza: any;
	@Input() boxReady: any;
	@Output() takeBox: EventEmitter<any> = new EventEmitter<any>();
	public cut: boolean;
	public boxed: boolean;
	public cuttingPizza: boolean;
	public boxingPizza: boolean;

	constructor() {}

	ngOnInit(): void {
		this.cut = false;
		this.boxed = false;
	}

	cutPizza() {
		this.cuttingPizza = true;
	}

	doneCutting() {
		this.cut = true;
		this.cuttingPizza = false;
	}

	boxPizza() {
		this.boxingPizza = true;
		this.takeBox.emit();
	}

	doneBoxing() {
		this.boxed = true;
		this.boxingPizza = false;
	}
}
