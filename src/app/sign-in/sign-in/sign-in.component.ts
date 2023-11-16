import { Component } from '@angular/core';
import {SignInService} from '../sign-in.service'
import Swal from 'sweetalert2';
import { SwalUtils } from 'src/app/utils/swal-utils';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  userId!: number;
  userPhoneNumber!: number;
  userAge!: number;
  userType!: string;
  userName!: string;
  userPassword!: string;
  userEmail!: string;

  constructor(private SignInService: SignInService, private router:Router) {}

  registrarUsuario() {
    // Validar que todos los campos estén llenos
    if (!this.userId || !this.userPhoneNumber || !this.userAge || !this.userType || !this.userName || !this.userPassword || !this.userEmail) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    this.router.navigateByUrl('')  

    SwalUtils.customMessageOk('Usuario registrado:', this.userName);
  }

  

  volverAtras(){
    this.router.navigateByUrl('')  
  }

}
