import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-cook',
	templateUrl: './cook.component.html',
	styleUrls: [ './cook.component.scss' ]
})
export class CookComponent implements OnInit {
	@Input() gameState: Observable<boolean>;
	constructor() {}

	ngOnInit(): void {}
}
