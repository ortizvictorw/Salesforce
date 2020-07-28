import { LightningElement } from 'lwc';

export default class ContenedorPadre extends LightningElement {
nombre = 'nombre del padre'

handleCambioNombre(){
    this.nombre = "nombre asignado por el boton dos"
}

handleCambioNombre2(){

    this.nombre = "nombre asignado por el boton uno"

}
}






