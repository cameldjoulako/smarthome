import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
	@Input() appareilName : string;
	@Input() appareilStatus : string;

	constructor() { }

	ngOnInit() {
 }

  /*méthode qui recupere le status*/
  getStatus(){
  	return this.appareilStatus;
  }

  getColor(){
  	if(this.appareilStatus === "allumé"){
  		return 'green';
  	}else if(this.appareilStatus === 'éteint'){
  		return 'red';
  	}

  }

}
