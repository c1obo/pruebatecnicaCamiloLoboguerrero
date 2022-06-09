import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
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
      console.log(this.users + "los usuarios");

    });
  }
  eliminarPropietario(id: string) {
    console.log("estoy eliminando el usuario -->" + id);
    this.usuariosService.eliminarUsuario(id).then(() => {
      console.log("empleado eliminado con exito");

    }).catch((err) => {
      console.log(err);

    })
  }
}
