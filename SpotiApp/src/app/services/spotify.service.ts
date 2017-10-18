import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

  artistas:any[]  = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista = "https://api.spotify.com/v1/artists"
  secToken="Bearer BQD1r9fSD0AlTs9uCxNzhrFlFNKhNLp0gs5mR-8NmQYkED51H1NyLsVOmM8FEx-_w1MYjPT6Fhw4FCn_FY44eg";
  constructor( private http:Http) { }

  getArtistas(termino:string){
  let query = `?q=${ termino }&type=artist`;

  let url = this.urlBusqueda + query;
  let headers = new Headers();
  headers.append('Authorization', 'secToken');

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
  headers.append('Authorization', 'secToken');

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
  headers.append('Authorization', 'secToken');

  return this.http.get( url , { headers })
        .map( res => {
            // this.artista = res.json();
            console.log(res.json().tracks);
            return res.json().tracks;

          }
        )
  }




}
