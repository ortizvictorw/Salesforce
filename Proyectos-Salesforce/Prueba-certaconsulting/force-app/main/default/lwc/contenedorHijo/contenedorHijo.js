import { LightningElement,api } from 'lwc';

export default class ContenedorHijo extends LightningElement {
    @api nombre1;

    handleClick() {
        this.dispatchEvent (new CustomEvent('clickr'));
    }
   

    }
