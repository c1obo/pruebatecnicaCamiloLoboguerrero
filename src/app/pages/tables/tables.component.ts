import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/project/services/usuarios.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  users: any[] = [];

  constructor(private usuariosService: UsuariosService,private actRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuariosService.getUsuarios().subscribe(data => {
      this.users = [];
      data.forEach((element: any) => {
        this.users.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.users + "los propietarios");

    });
  }
  eliminarPropietario(id: string) {
    console.log("estoy eliminando el propietario -->" + id);
    this.usuariosService.eliminarUsuario(id).then(() => {
      console.log("empleado eliminado con exito");

    }).catch((err) => {
      console.log(err);

    })
  }
}
