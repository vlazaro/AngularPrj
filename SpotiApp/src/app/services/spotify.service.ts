import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

  artistas:any[]  = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  constructor( private http:Http) { }

  getArtistas(termino:string){
  let query = `?q=${ termino }&type=artist`;

  let url = this.urlBusqueda + query;
  let headers = new Headers();
  headers.append('Authorization', 'Bearer BQBlYmmRBJwwMvjYySVXLkEhpfdgJmeVevsqR5FgsxS9w5GU3AuXBmBnNRLXEw9GV-NCQcjNkSMSomGwqiLqWv-Zk27vswgHjjYcxedtv67dKrjVOqo3Ke_ic-nH_IU5cIvFb3a246k');

  return this.http.get( url , { headers })
        .map( res => {
           this.artistas = res.json().artists.items;
           console.log(this.artistas);
          }
        )
  }
}
