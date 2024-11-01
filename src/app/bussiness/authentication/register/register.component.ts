import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export default class RegisterComponent {

  async onSubmit() {
   // const response = await this.usuariosService.registerUser(this.formulario.value);
    console.log('registro');
  }
}
