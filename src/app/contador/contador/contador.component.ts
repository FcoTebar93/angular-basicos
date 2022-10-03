import { Component } from "@angular/core"

@Component ({
    selector: "app-contador",
    templateUrl: "../app.component.html",
    template: `
    <h1>{{titulo}}</h1>


<h3>La base es: <strong>{{base}}</strong></h3>

<button (click)="acumular(base)">{{base}}</button>

<h3>{{numero}}</h3>

<button (click)="acumular(-base)">- {{base}}</button>
    `
})

export class ContadorComponent {
    titulo: string = 'Contador app';

    numero: number = 10;
  
    base: number = 5;
  
    acumular(valor: number) {
      this.numero+= valor;
    }
  
}