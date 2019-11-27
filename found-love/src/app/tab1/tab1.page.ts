import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  {

  
    gente = [
      {Nombre: 'Liliana',img:'assets/imagen1.jpg'},
      {Nombre: 'Julio',img:'assets/imagen2.jpg'},
      {Nombre: 'Luis',img:'assets/imagen3.jpg'},
      {Nombre: 'Alisson',img:'assets/imagen4.jpeg'},
      {Nombre: 'Floyd',img:'assets/imagen5.jpg'},
      {Nombre: 'Emma',img:'assets/imagen6.jpg'},
    ];
  



}
