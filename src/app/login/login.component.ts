import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    public route: Router
  ) {}

  registrar() {
    this.route.navigateByUrl('register');
  }
  cambiar() {
    this.route.navigateByUrl('forgot_password');
  }

  userEmail: string = '';
  userPassword: string = '';
  errorMessage: string = '';

  login() {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      console.log(userData)
      if (userData.email === this.userEmail && userData.password === this.userPassword) {
        // Credenciales válidas, redirigir a otra página o realizar acciones necesarias
        // this.route.navigateByUrl('dashboard');
        alert('Iniciaste sesion con exito')
      } else {
        this.errorMessage = 'Credenciales inválidas. Inténtalo de nuevo.';
      }
    } else {
      this.errorMessage = 'No hay usuarios registrados. Regístrate primero.';
    }
  }
}
