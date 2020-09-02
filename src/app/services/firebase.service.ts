import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  /**
   * Crea un usuario
   * @param usuario objeto para ser guardado
   */
  create(usuario: any) {
    return this.firestore.collection('usuarios').add(usuario);
  }


  /**
   * Obtener todos los usarios
   */
  getAll() {
    return this.firestore.collection('usuarios').snapshotChanges();
  }


  /**
   * 
   * @param usuario actualizar un usuario
   */
  update(usuario: any, idFirebase:string) {
    return this.firestore.collection('usuarios').doc(idFirebase).update(usuario);
  }

  /**
   * 
   * @param data eliminar usuario
   */
  delete (usuario){
    return this.firestore.collection('usuarios').doc(usuario.idFirebase).delete();
  }


}
