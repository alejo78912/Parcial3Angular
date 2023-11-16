import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  juegosMayoresDe18: any[] = [];
  edadUsuario: number = 0; // Inicializamos la edad a 0 por defecto

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    
    const edadUsuarioString = sessionStorage.getItem('edadUsuario');
    this.edadUsuario = edadUsuarioString ? parseInt(edadUsuarioString, 10) : 0;

    console.log(this.edadUsuario);

    
    this.obtenerJuegosMayoresDe18();
  }

  obtenerJuegosMayoresDe18() {
    this.juegosMayoresDe18 = this.gamesService.getJuegosMayoresDe18(this.edadUsuario);
  }
}
