import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from '../../sign-in/sign-in.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  

  constructor(private router: Router, private SignInService: SignInService,) {

  }

  iniciarSesion() {
    if (!this.username || !this.password) {
      alert('Por favor, ingrese su usuario y contraseña.');
      return;
    }

    const usuarioAutenticado = this.SignInService.buscarUsuarioPorEmailYContraseña(this.username, this.password);

    if (usuarioAutenticado) {

      sessionStorage.setItem('nombreUsuario', usuarioAutenticado.userName);


      sessionStorage.setItem('edadUsuario', usuarioAutenticado.userAge.toString());
      
      sessionStorage.setItem('email', usuarioAutenticado.userEmail);
      
      sessionStorage.setItem('password', usuarioAutenticado.userPassword);


      if (usuarioAutenticado.userType === 'Admin') {
        this.router.navigate(['/admin']); 
      }
      else if (usuarioAutenticado.userType === 'Gamer') {
        this.router.navigate(['/gamer']); 
      } else if (usuarioAutenticado.userType === 'Invitado') {
        this.router.navigate(['/invitado']); 
      }
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  }
}
