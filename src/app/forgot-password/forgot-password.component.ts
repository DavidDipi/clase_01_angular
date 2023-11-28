import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})

export class ForgotPasswordComponent {

  nombreUsuario: string = '';
  contrasena: string = '';

  mensaje: string = '';

  constructor(
    public route: Router
  ){}

  // Obtener la lista de usuarios del localStorage
  private obtenerListaUsuarios(): any[] {
    const listaUsuariosString = localStorage.getItem('users');
    return listaUsuariosString ? JSON.parse(listaUsuariosString) : [];
  }

  recuperar() {
    const listaUsuarios = this.obtenerListaUsuarios();

    // Busca el usuario en la lista
    const usuarioIndex = listaUsuarios.findIndex(users => users.email === this.nombreUsuario);
  
    if (usuarioIndex !== -1) {
      // Actualiza la contraseña del usuario
      listaUsuarios[usuarioIndex].password = this.contrasena;
  
      // Guarda la lista actualizada en el localStorage
      localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
  
      this.mensaje = 'Cambio de contraseña exitoso';
      setTimeout(() => {
        this.route.navigateByUrl('');
      }, 2000);
    } else {
      this.mensaje = 'El usuario no está registrado en el sistema, por favor regístrese';
  
      setTimeout(() => {
        this.route.navigateByUrl('register');
      }, 2000);
    }

    this.limpiarValores();
  }

  private limpiarValores() {
    this.nombreUsuario = '';
    this.contrasena = '';
  }

}