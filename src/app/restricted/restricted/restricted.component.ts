import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restricted',
  templateUrl: './restricted.component.html',
  styleUrls: ['./restricted.component.css']
})
export class RestrictedComponent {
  constructor(private router: Router) { }

  irAlLogin() {
    this.router.navigate(['/login']);
  }
}
