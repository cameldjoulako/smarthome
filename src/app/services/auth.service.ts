export class AuthService {
	
	isAuth = false;   

	/*Création du servive de connexion(sigIn) en utilisant les promise(méthode asynchrone) afin de simuler le temps que la connexion vas prendre(ie simulation d'une requette http) */
	signIn(){
		return new Promise(
			(resolve, reject) => {
				setTimeout(
					() =>{
						this.isAuth = true;
						resolve(true);
					}, 2000
				);
			}
		);   

	}

	signOut(){
		this.isAuth = false;
	}
}