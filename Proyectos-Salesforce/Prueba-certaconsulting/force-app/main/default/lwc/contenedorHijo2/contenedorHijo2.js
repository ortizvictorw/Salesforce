import { LightningElement,api } from 'lwc';

export default class ContenedorHijo2 extends LightningElement {
@api nombre2;


   
handleClick() {
        this.dispatchEvent (new CustomEvent('click'));
    }
    

    

} 
