import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor() { }

  private games: any[] = [
    {
    nombre:"GTA V",
    fechaLanzamiento:'12-12-2012',
    precio:30000,
    edadPermitida:18,
    oferta:"90%",
    imagen:"https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg"
    },
    {
      nombre:"call of dutty ",
      fechaLanzamiento:'24-01-2005',
      precio:8200,
      edadPermitida:18,
      oferta:"60%",
      imagen:"https://m.media-amazon.com/images/M/MV5BNWRiZTNlYjAtNTJhOC00ZmQyLWFiMDctNWMzN2ZiNzRkYTU3XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg"
    },
    {
    nombre:"GOW",
    fechaLanzamiento:'16-06-2023',
    precio:44550,
    edadPermitida:14,
    oferta:"80%",
    imagen:"https://static.13.cl/7/sites/default/files/esports/articulos/field-image/portadagowpc.jpg"
    },
    {
    nombre:"rocket league",
    fechaLanzamiento:'15-02-2018',
    precio:12000,
    edadPermitida:14,
    oferta:"40%",
    imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rocket_League_coverart.jpg/800px-Rocket_League_coverart.jpg"
    },

    
  ];


  getJuegosMayoresDe18(edadUsuario: number): any[] {
    return this.games.filter(juego => juego.edadPermitida <= edadUsuario);
  }

}
