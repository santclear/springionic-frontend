import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { StorageService } from './storage.service';
import { LocalUser } from "../models/local_user";


//TODO: 2. Sevice para autenticação
@Injectable()
export class AuthService {

	constructor(public http: HttpClient, public storage: StorageService) {
	}

	authenticate(creds: CredenciaisDTO) {
		return this.http.post(
			`${API_CONFIG.baseUrl}/login`,
			creds,
			{// Define que a requisição retornará um objeto do tipo resposta. Obtendo assim o header http que contém o token de autorização
				observe: 'response',
				/* O endpoint login retorna uma resposta de corpo vazio. 
				Quando isso ocorre é necessário definir que o tipo de resposta esperada é um text,
				para que o framework não tente fazer um parse no json, o qual acarretará em um erro */
				responseType: 'text'
			});
	}

	successfulLogin(authorizationValue: string) {
		let tok = authorizationValue.substring(7);
		let user: LocalUser = {
			token: tok
		};
		this.storage.setLocalUser(user);
	}

	logout() {
		this.storage.setLocalUser(null);
	}
}