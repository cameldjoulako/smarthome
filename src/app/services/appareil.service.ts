export class AppareilService{
	appareils = [
		{
			name: 'TV Samsung HD 24 Pouces',
			status: 'allumé'
		},
		{
			name: 'Ordinateur portable PB',
			status: 'allumé'
		},
		{
			name: 'Samsung Smartphone Android',
			status: 'éteint'
		},
		{
			name: 'Itel phone',
			status: 'allumé'
		}
	];

	switchOnAll(){
		for(let appareil of this.appareils){
			appareil.status = 'allumé';
		}
	}

	switchOffAll(){
		for(let appareil of this.appareils){
			appareil.status = 'éteint';
		}
	}

	switchOnOne(index: number){
		this.appareils[index].status = 'allumé';
	}

	switchOffOne(index: number){
		this.appareils[index].status = 'éteint'
	}
}