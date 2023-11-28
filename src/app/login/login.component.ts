import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RegisterComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  nombreUsuario: string = '';
  contrasena: string = '';

  mensajeInicioSesion: string = '';

  constructor(
    public route: Router
  ){}

  navegarHome(){
    this.route.navigateByUrl('inicio');
  }

  navegarRegistro(){
    this.route.navigateByUrl('register');
  }

  navegarRestauracion(){
    this.route.navigateByUrl('forgot-password');
  }

  // Obtener la lista de usuarios del localStorage
  private obtenerListaUsuarios(): any[] {
    const listaUsuariosString = localStorage.getItem('users');
    return listaUsuariosString ? JSON.parse(listaUsuariosString) : [];
  }

  validarInicio() {
    // Obtiene la lista actual de usuarios
    const listaUsuarios = this.obtenerListaUsuarios();

    console.log(listaUsuarios);
    const usuarioValido = listaUsuarios.some(users => users.email === this.nombreUsuario && users.password === this.contrasena);

    const usuarioIncorrecto = listaUsuarios.some(users => users.email === this.nombreUsuario || users.password === this.contrasena);

    if (usuarioValido) {
      this.mensajeInicioSesion = 'Inicio de sesión exitoso.';
      setTimeout(() => {
        this.navegarHome();
      }, 2000);

    } else if (usuarioIncorrecto) {
      this.mensajeInicioSesion = 'Nombre de usuario o contraseña incorrectos.';
      
    }else{
      this.mensajeInicioSesion = 'El usuario no esta registrado en el sistema, por favor registrese';

    }

    // Limpiar los valores después de validar
    this.limpiarValores();
  }

  private limpiarValores() {
    this.nombreUsuario = '';
    this.contrasena = '';
  }


}