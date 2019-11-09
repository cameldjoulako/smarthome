import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
}) 
export class AuthComponent implements OnInit {
	authStatus: boolean;

	/*la nprésense de authService dans le constructeur nous permet d'integrer le service créé au component afin de nous permettre d'importer et utilisé les méthodes créé*/
  constructor(private authService: AuthService, private router: Router  ) { }

  ngOnInit() {
  	this.authStatus = this.authService.isAuth;
  }

/*La méthode onSignIn() va déclanché la méthode signIn() se trouvent dans  le service AuthService
 qui est une méthode asynchrone. et nous utilisons then(...)
  pour réagir une fois que la fonction de callback du promise sera appelé
	cette méthode va nous permettre de mettre a jour le status de connexion
  */
  onSignIn(){
  	this.authService.signIn().then(
  		() => {
  			this.router.navigate(['appareils']);
  			this.authStatus = this.authService.isAuth;
  		}
  	);
  }

  onSignOut(){
  	this.authService.signOut();
  	this.authStatus = this.authService.isAuth;


  }


}
