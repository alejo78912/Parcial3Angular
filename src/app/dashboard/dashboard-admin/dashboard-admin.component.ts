import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit{


  nombre: string = "";

  ngOnInit(): void {
   
    this.nombre = sessionStorage.getItem('nombreUsuario') || "";
  }
}
