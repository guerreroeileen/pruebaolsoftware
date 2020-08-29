import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseService } from './../../services/firebase.service';

@Component({
  selector: 'ngx-usuarios-components',
  templateUrl: './usuarios-components.component.html',
  styleUrls: ['./usuarios-components.component.scss']
})
export class UsuariosComponentsComponent implements OnInit {

  closeResult = '';
  usuarioForm: FormGroup;
  config: any;
  updateUsuario: boolean;
  collection = { count: 3, data: [] };

  ngOnInit(): void {

    this.updateUsuario = false;

    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      totalItems: this.collection.data.length
    };


    //formulario para crear un nuevo usuario
    this.usuarioForm = this.fb.group({
      nombres: [''],
      apellidos: [''],
      id: [''],
      rol: [''],
      estado: [''],
      contrasena: [''],
      telefono: [''],
      correo: [''],
    });

    //cargando datos
    this.firebaseService.getAll().subscribe(resp => {
      this.collection.data = resp.map(e => {
        return {
          nombres: e.payload.doc.data().nombres,
          apellidos: e.payload.doc.data().apellidos,
          id: e.payload.doc.data().id,
          rol: e.payload.doc.data().rol,
          estado: e.payload.doc.data().estado,
          contrasena: [''],
          telefono: e.payload.doc.data().telefono,
          correo: e.payload.doc.data().correo,
          idFirebase: e.payload.doc.id
        };
      });
    })

  }


  constructor(
    private modalService: NgbModal,
    public fb: FormBuilder,
    private firebaseService: FirebaseService

  ) {
  }


  /**
   * Metodo para guardar un nuevo usuario
   */
  save(): void {
    this.firebaseService.create(this.usuarioForm.value).then(resp => {
      console.log(resp)
      this.collection.data.push(this.usuarioForm.value);
      this.usuarioForm.reset;
    }).catch(error => {
      console.error(error)
    })


  }
  /**
   * metodo para borrar un elemento de firebase
   * @param item elemento a borrar
   */
  delete(item): void {
    this.firebaseService.delete(item).then(resp => {
      this.collection.data.pop(item);
    }).catch(error => {
      console.error(error)
    })

  }

  update(item):void{
    this.firebaseService.update(item).then(resp=>{

    }).catch(error=>{
      console.error(error);
    })
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }


  open(content) {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      });
  }


  openUpdate(content, item) {
    this.updateUsuario=true;

    this.usuarioForm.setValue({
      nombres: item.nombres,
      apellidos: item.apellidos,
      id: item.id,
      rol: item.rol,
      estado: item.estado,
      contrasena: item.contrasena,
      telefono: item.telefono,
      correo: item.correo,
    });
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
