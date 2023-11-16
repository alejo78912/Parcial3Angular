import { Component } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent {

  juegosMayoresDe18: any[] = [];
  edadUsuario: number = 0; 


  constructor(private gamesService: OfertasService, private router:Router) {}

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
