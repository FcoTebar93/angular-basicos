import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
   
export class ListadoComponent {

  heroes: string[] = ["Spiderman", "Iron Man", "Hulk", "Dr Doom"];
  heroeBorrado: string = "";

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || "";
  }
}
