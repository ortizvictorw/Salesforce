import { LightningElement, wire,track } from "lwc";

import NAME_FIELD from "@salesforce/schema/Account.Name";
import PHONE_FIELD from "@salesforce/schema/Account.Phone";
import Nivel_FIELD from "@salesforce/schema/Account.Nivel__c";  
import getAccounts from "@salesforce/apex/crud.getAccounts";
import updateAccounts from "@salesforce/apex/crud.updateAccounts";


//Columnas a poblar

const COLUMNS = [
{
    label: "Account Name", 
    fieldName: NAME_FIELD.fieldApiName, 
    type: "text" 
},
{
    label: "Phone",
    fieldName: PHONE_FIELD.fieldApiName,
    type: "phone"
},
{ 
    label: "Nivel", 
    fieldName: Nivel_FIELD.fieldApiName, 
    type: "picklist"
}  
]; 

export default class contenedorDeTablas extends LightningElement {
    columns = COLUMNS;

//datos que poblaran las tablas nivel 1 y 2
    @track accountsNivel1=[];
    @track accountsNivel2=[];

//consulat de cuentas 

    @wire(getAccounts, {})
//llama al metodo de getAccounts el cual consulta las cuentas
    wiredAccounts({error,data}){
        console.log('Llamando al wire de accounts');
//si la data existe mostrame los array de las tablas       
        if(data){
//estas son las colmnas de las tablas nivel1 y nivel 2            
            this.accountsNivel1=[];
            this.accountsNivel2=[];
            console.log('DATA',data);

//itera la data y se pregunta si la data en la posicion actual tiene nivel 1 le hace un push a accountsNivel1
//itera la data y se pregunta si la data en la posicion actual tiene nivel 2 le hace un push a accountsNivel2
            for(let index in data){
                console.log(data[index]);
                console.log(data[index].Nivel__c);
                if(data[index].Nivel__c == '1'){
                    this.accountsNivel1.push(data[index]);
                }else if (data[index].Nivel__c == '2'){
                    this.accountsNivel2.push(data[index]);
                }
            }

            console.log('accountsNivel1',this.accountsNivel1);
            console.log('accountsNivel2',this.accountsNivel2);
        }
//captura el error        
        if(error){
            console.error(JSON.stringify(error));
        }
    }




    //boton que ejecuta el metodo de update en el controlador

    handleClickActualizar() {
        console.log('TEST');

//captura la fila completa del registro con el checkbox seleccionado de la tabla Nivel 1
        let nivel1=this.template.querySelector('.nivel1').getSelectedRows();
        console.log('Nivel1 ',nivel1);


//captura la fila completa del registro con el checkbox seleccionado de la tabla Nivel 1
        let nivel2=this.template.querySelector('.nivel2').getSelectedRows();
        console.log('Nivel2 ',nivel2);

//concatena los array que contienen los filas selecionadas de ambas tablas y las asigna a una variable
        let cuentasParaActualizar=nivel1.concat(nivel2);

//recorre el array de cuentas para actualizar y envia al metodo del controlador dicha informacion        
        updateAccounts({accountsToUpdate : cuentasParaActualizar})

//promesa que devuelve las cuentas con los niveles invertidos        
        .then(data => {

            console.log('DATA',data);

//array que contendran las cuentas modificadas           
            this.accountsNivel1=[];
            this.accountsNivel2=[];

//itera la data y se pregunta si la data en la posicion actual posee nivel 1 hacele push al array accountsNivel1
//itera la data y se pregunta si la data en la posicion actual posee nivel 2 hacele push al array accountsNivel2

            for(let index in data){
                console.log(data[index]);
                console.log(data[index].Nivel__c);
                if(data[index].Nivel__c == '1'){
                    this.accountsNivel1.push(data[index]);
                }else if (data[index].Nivel__c == '2'){
                    this.accountsNivel2.push(data[index]);
                }
            }

            console.log('accountsNivel1',this.accountsNivel1);
            console.log('accountsNivel2',this.accountsNivel2);
        })
//si algo falla lo toma el catch y muestra un error en formato de string dentro de un console.log       
        .catch(error =>{
            console.log(JSON.stringify(error));
        });
    }
}