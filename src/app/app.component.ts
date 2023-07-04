import { Component } from '@angular/core';




interface Alumno {
  nombre: string;
  edad: number;
  telefono: string;
  correo: string;
  nota:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'segunda-entrega';
  
  alumnos: Alumno[] = [
    { nombre: 'Juan', edad: 18, telefono: '123456789', correo: 'juan@todobien.com',  nota: 5 },
    { nombre: 'María', edad: 17, telefono: '987654321', correo: 'maria@todobien.com', nota: 10 },
    { nombre: 'Pedro', edad: 19, telefono: '456789123', correo: 'pedro@todobien.com', nota:10 },
    { nombre: 'Juan', edad: 15, telefono: '123456789', correo: 'juan@todobien.com',  nota: 3 },
    { nombre: 'María', edad: 18, telefono: '987654321', correo: 'maria@todobien.com', nota: 5 },
    { nombre: 'Pedro', edad: 19, telefono: '456789123', correo: 'pedro@todobien.com', nota:10 },
    { nombre: 'Juan', edad: 22, telefono: '123456789', correo: 'juan@todobien.com',  nota: 6 },
    { nombre: 'María', edad: 17, telefono: '987654321', correo: 'maria@todobien.com', nota: 7 },
    { nombre: 'Pedro', edad: 19, telefono: '456789123', correo: 'pedro@todobien.com', nota:10 },
  ];

  ngOnInit() {
    const intervalIds: any[] = [];

    this.alumnos.forEach((alumno) => {
      const intervalId = setInterval(() => {
        alumno.nota++;
      }, 1000);

      intervalIds.push(intervalId);
    });

        setTimeout(() => {
      intervalIds.forEach((intervalId) => {
        clearInterval(intervalId);
      });
    }, 10000);
  }
}


