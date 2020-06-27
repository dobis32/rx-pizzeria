import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-expo',
	templateUrl: './expo.component.html',
	styleUrls: [ './expo.component.scss' ]
})
export class ExpoComponent implements OnInit {
	@Input() gameState: Observable<boolean>;
	@Input() cookedPizzas: Array<any>;
	public boxesReady: number;
	public foldingBox: boolean;
	constructor() {
		this.boxesReady = 0;
	}

	ngOnInit(): void {
		this.foldingBox = false;
	}

	foldBox() {
		this.foldingBox = true;
	}

	boxFolded() {
		this.foldingBox = false;
		this.boxesReady++;
	}

	giveBox() {
		this.boxesReady--;
	}
}
