import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

   public cardlist: any[];

  constructor() {
    this.cardlist = [
      {'id':  'id0', 'description': 'Propiedades mas Vendidas'},
      {'id':  'id1', 'description': 'Propiedades mas grandes'},
      {'id':  'id2', 'description': 'Propiedades mas caras'},
      {'id':  'id3', 'description': 'Propiedades mas baratas'}
      ];
  }


}
