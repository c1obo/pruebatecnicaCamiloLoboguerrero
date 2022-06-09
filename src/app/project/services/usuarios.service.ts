import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private firestore: AngularFirestore) { }
  agregarUsuario(usuario: any): Promise<any> {
    return this.firestore.collection('users').add(usuario);
  }

  getUsuarios(): Observable<any>{
    return this.firestore.collection('users').snapshotChanges();
  }

  eliminarUsuario(id:string): Promise<any>{
    return this.firestore.collection('users').doc(id).delete();

  }

  getUsuario(id:string): Observable<any>{
    return this.firestore.collection('users').doc(id).snapshotChanges();
  }

  actualizarUsuario(id:string, data:any): Promise<any>{
    return this.firestore.collection('users').doc(id).update(data);
  }
}
