import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  lastUpdate = new Promise(
  		(resolve, reject) => {
  			const date = new Date();
  			setTimeout(
  				() =>{
  					resolve(date);
  				}, 2000
  			);
  		}
  	);

  appareils = [
  	{
  		name: "TV LG HD 24 Pouces",
  		status: "allumé"
  	},
  	{
  		name: "Ordinateur portable PB",
  		status: "allumé"
  	},
  	{
  		name: "Samsung Smartphone Android",
  		status: "éteint"
  	},
  	{
  		name: "Itel phone",
  		status: "allumé"
  	},
  ];

  /*app1 = "TV LG HD 24 Pouces";
  app2 = "Ordinateur portable PB";
  app3 = "Samsung Smartphone Android";
  app4 = "Itel phone";*/

  constructor(){
  	setTimeout(
  			()=>{
  				this.isAuth=true;
  			}, 10
  	);
  }

  onAllumer(){
  	confirm("On allume tout");
  }
}
