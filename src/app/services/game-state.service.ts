import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class GameStateService {
	public gameOn: boolean;

	public gameStateSubject: Subject<any> = new Subject<any>();
	constructor() {
		this.gameOn = false;
	}

	run() {
		this.gameOn = true;
		this.gameStateSubject.next(this.gameOn);
	}

	stop() {
		this.gameOn = false;
		this.gameStateSubject.next(this.gameOn);
	}
}
