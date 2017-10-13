import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

  artistas:any[]  = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista = "https://api.spotify.com/v1/artists"
  constructor( private http:Http) { }

  getArtistas(termino:string){
  let query = `?q=${ termino }&type=artist`;

  let url = this.urlBusqueda + query;
  let headers = new Headers();
  headers.append('Authorization', 'Bearer BQDBjYYejcTVsr59pkrDU0rKUWCpAFkJq3XpzBR0EeRXt-bqGK1MyyRFYePgDHusxypcwveit0Af7ha7eLSAKuTa9s5dKorijf0KXVxnUb16uqYzRk__W17gq8X_8TEbTJ3ml1ry2JE');

  return this.http.get( url , { headers })
        .map( res => {
           this.artistas = res.json().artists.items;
           console.log(this.artistas);
          }
        )
  }

  getArtista(id:string){
  let query = `/${ id }`;
  let url = this.urlArtista + query;
  let headers = new Headers();
  headers.append('Authorization', 'Bearer BQBWzgAEPwSNr2FkXl6ZPN0hT-Mms3Y-_ScEIhUFokMCILJMgFXkYDWy4xhtA3SEImQPOlkSG0BrbpOSmQFYWasahTYKwkBs7Fg-IpQbIy29tdgqArjuiU90yxWObj_rEOYdIv8rwLM');

  return this.http.get( url , { headers })
        .map( res => {
            // this.artista = res.json();
            console.log(res.json());
            return res.json();

          }
        )
  }

  getTop(id:string){
  let query = `/${ id }/top-tracks?country=US`;
  let url = this.urlArtista + query;
  let headers = new Headers();
  headers.append('Authorization', 'Bearer BQCFGo8mbfy01BAzo220daEErtOWbRehHwxsc_TytPpB_Uhhjs5lAkr4KiLbrljZV0rnWmVcAyZkvEQZHNEhvTcZTF72_N-0YUprI1K6DOsea9rVdcTbZdTiPNYGYML8wKC7cScNfZI');

  return this.http.get( url , { headers })
        .map( res => {
            // this.artista = res.json();
            console.log(res.json().tracks);
            return res.json().tracks;

          }
        )
  }




}
