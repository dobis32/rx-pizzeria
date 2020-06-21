import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-progress-bar',
	templateUrl: './progress-bar.component.html',
	styleUrls: [ './progress-bar.component.scss' ]
})
export class ProgressBarComponent implements OnInit {
	@Input() maxProgress: number;
	@Input() speed: number;
	public progress: number;
	public go: any;
	@Output() finished: EventEmitter<any> = new EventEmitter<any>();
	constructor() {}

	ngOnInit(): void {
		this.progress = 0;
		this.go = setInterval(() => {
			if (this.progress < this.maxProgress) this.progress++;
			else {
				clearInterval(this.go);
				this.finished.emit();
			}
		}, 1000 / this.speed);
	}
}
