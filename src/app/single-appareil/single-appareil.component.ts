import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
	name: string = 'Appareil';
	status: string = 'Status';

/* ActivatedRoute contient tous les informations de la route Active*/
  constructor(private appareilService : AppareilService, private route: ActivatedRoute) { }

  ngOnInit() {
  	/*on récupere ici */
  	const id = this.route.snapshot.params['id'];
  	/*le + devant id permet den caster id en chiffre puisque l'instruction précedente nous retoune une chaine de caractere*/
  	this.name = this.appareilService.getAppareilById(+id).name;
  	this.status = this.appareilService.getAppareilById(+id).status;
  }

}
