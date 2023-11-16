import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { SignInService } from 'src/app/sign-in/sign-in.service';

export const invitadoguardGuard: CanActivateChildFn = async (childRoute, state) => {
  const router = inject(Router);
  const rol = inject(SignInService);
  console.log('Auth guard');
  const email = sessionStorage.getItem('email')!;
  

  try {
    const response = await rol.buscarRolUsuario(email);

    if (response && response === 'Invitado') {
      return true;
    } else if (!response) {
      router.navigateByUrl('restricted');
      console.log(response);
      return false;
    }
    
  } catch (error) {
    console.error(error);
    router.navigateByUrl('restricted');
    return false;
  }

  return false;
};
