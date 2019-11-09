export class AppareilService{
	appareils = [
		{	id:1,
			name: 'TV Samsung HD 24 Pouces',
			status: 'allumé'
		},
		{	id:2,
			name: 'Ordinateur Portable PB',
			status: 'allumé'
		},
		{	id:3,
			name: 'Samsung Smartphone',
			status: 'éteint'
		},
		{	id:4,
			name: 'Itel phone',
			status: 'allumé'
		}
	];

	getAppareilById(id: number){
		/*la fonction find() va aller chercher l'object dans le tableau appareils donc le id 
			correspond à l'id passé en argument
		*/
		const appareil = this.appareils.find(
			(appareilObect) =>{
				return appareilObect.id === id;
			}
		);

		return appareil;
	}

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