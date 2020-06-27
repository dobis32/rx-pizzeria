import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
	selector: 'app-prep',
	templateUrl: './prep.component.html',
	styleUrls: [ './prep.component.scss' ]
})
export class PrepComponent implements OnInit {
	@Input() public gameState: Observable<boolean>;
	@Output() public preppedPizzaReady: EventEmitter<any> = new EventEmitter<any>();
	public makingDough: boolean;
	public doughSizeForm: FormGroup;
	public activePizza: string;
	public hasSauce: boolean;
	public addingSauce: boolean;
	public addingCheese: boolean;
	public hasCheese: boolean;
	constructor(public fb: FormBuilder) {
		this.doughSizeForm = this.fb.group({
			size: new FormControl('', [ Validators.required ])
		});
		this.makingDough = false;
		this.hasSauce = false;
		this.addingSauce = false;
		this.addingCheese = false;
		this.hasCheese = false;
	}

	ngOnInit(): void {}

	makeDough(fg: FormGroup) {
		if (fg.valid) {
			this.makingDough = true;
			fg.controls['size'].disable();
		} else {
			console.log('select dough size');
		}
	}

	doughCreated() {
		this.activePizza = this.doughSizeForm.value.size;
		this.makingDough = false;
		this.doughSizeForm.controls['size'].enable();

		this.doughSizeForm.reset();
	}

	addSauce() {
		this.addingSauce = true;
	}

	addCheese() {
		this.addingCheese = true;
	}

	sauceAdded() {
		this.hasSauce = true;
		this.addingSauce = false;
	}

	cheeseAdded() {
		this.hasCheese = true;
		this.addingCheese = false;
	}

	sendToCook() {
		this.preppedPizzaReady.emit({ size: this.activePizza, cheese: this.hasCheese, sauce: this.hasSauce });
		this.activePizza = '';
		this.hasSauce = false;
		this.hasCheese = false;
	}

	scrap() {
		this.activePizza = '';
		this.hasSauce = false;
		this.hasCheese = false;
	}
}
