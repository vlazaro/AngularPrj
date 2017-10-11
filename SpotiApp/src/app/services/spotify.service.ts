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
  headers.append('Authorization', 'Bearer BQBAby9QP49RiKr0jok4EVQ6-d72kbQox5kLCiTGgE0LV3FqJ81TWxNcO7RVsplXoN9eukM0Zg02Sc_BW_qSUCSmTlZakIHfE0nTY9XBJT5kIbvfdjyRJcq9KyrTIU8_2S3qp6qzjSo');

  return this.http.get( url , { headers })
        .map( res => {
           this.artistas = res.json().artists.items;
           console.log(this.artistas);

        } )

  }
}
