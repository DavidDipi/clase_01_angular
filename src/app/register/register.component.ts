import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',


  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})



export class RegisterComponent {

  email: string = '';
  password: string = '';
  

  constructor(
    public route: Router
  ) {}

  iniciar() {
    this.route.navigateByUrl('');
  }

  registrar(event: Event) {
    event.preventDefault(); 
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Verificar si el email y la contraseña se han ingresado
    if (this.email && this.password) {
      // Crear un objeto con los datos del usuario
      const userData = {
        email: this.email,
        password: this.password
      };

      // Obtener los datos actuales del localStorage o inicializar un array vacío si no existen
      const usersData = JSON.parse(localStorage.getItem('users') || '[]');

      // Agregar los nuevos datos del usuario al array
      usersData.push(userData);

      // Guardar el array actualizado en el localStorage
      localStorage.setItem('users', JSON.stringify(usersData));

      // Limpiar los campos después de registrar al usuario
      this.email = '';
      this.password = '';

      // Podrías redirigir a otra página aquí si es necesario
    }
  }

}
