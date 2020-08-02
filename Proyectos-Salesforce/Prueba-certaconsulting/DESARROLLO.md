# Sprint 1 "PREPARANDO ENTORNO DE TRABAJO"

### SFDX

* SALESFORCE
* DEVELOPER
* EXPERIENCE


### Integrar SalesForce con VisualStudio Code


* instalar la Command Line Interface (CLI)
Utilice la CLI de Salesforce para controlar todo el ciclo de vida de sus aplicaciones de Salesforce. Con la CLI, podrá crear o conectar fácilmente entornos de desarrollo y pruebas, además de sincronizar metadatos y códigos entre sus organizaciones y un sistema de control de versiones.

* Instalar extension SalesForce Extension Pack 
	* Paquete de extensión (7)

### Apex
Provides code-editing features for the Apex programming language
Salesforce

Apex Interactive Debugger
Provides debugging support for the Apex programming language
Salesforce

Apex Replay Debugger
Replay Apex execution from Apex Debug Log
Salesforce

Salesforce CLI Integration
Provides integration with the Salesforce CLI
Salesforce

Aura Components
Provides code-editing features for Aura Components
Salesforce

Visualforce
Provides syntax highlighting for the Visualforce framework
Salesforce



* Crear un proyecto
Pulse Comando + Mayús. + P en Mac o Ctrl + Mayús. + P en Windows para que aparezca la paleta de comandos.
Asegúrese de que la nueva secuencia comience con el símbolo >
Ingrese SFDX: Create Project

Ingrese SFDX: Authorize an Org.

Para aceptar la URL de inicio de sesión predeterminada, pulse Entrar.
Tenga en cuenta que el navegador predeterminado abrirá una nueva ventana de inicio de sesión en Salesforce. Inicie sesión.
Cuando se le pregunte si desea permitir el acceso a la aplicación conectada, haga clic para permitirlo



* Crear una clase de Apex
Pulse Comando + Mayús. + P en Mac o Ctrl + Mayús. + P en Windows para que aparezca la paleta de comandos.
Ingrese SFDX: Create Apex Class.
Ingrese el nombre crud.
Si VS Code lo solicita, seleccione force-app/main/default/classes como directorio al que desea agregar crud.cls.

* Crear un Ligthning web component 
Pulse Comando + Mayús. + P en Mac o Ctrl + Mayús. + P en Windows para que aparezca la paleta de comandos.
Ingrese SFDX: Create Ligthning web component.
Ingrese el nombre tablasUsuarios.(contenera las tablas)

* Crear un Ligthning web component 
Pulse Comando + Mayús. + P en Mac o Ctrl + Mayús. + P en Windows para que aparezca la paleta de comandos.
Ingrese SFDX: Create Ligthning web component.
Ingrese el nombre imputRecord.(sera el formulario de creacion de cuentas)

## Resumen.
* Para crear una org de prueba:https://developer.salesforce.com/signup
* Integrar SalesForce con VisualStudio Code
* Crear un proyecto
* Crear un Clase controladora Apex
* Crear Ligthning web component 


___

# Sprint 2 "CREANDO LAS DATATABLES"

* Debemos crear un campo custom llamado Nivel__c de tipo "lista de seleccion desde el gestor de objetos en el objeto Account el la opcion campos y relaciones.(el nombre del campo sirve para referenciar el campo desde js y el controlador)

* dentro de HTML del LWC==>tablaUsuarios.html :

`<lightning-datatable
                        class="nivel1"
                        key-field="id"
                        data={data}
                        columns={columns}>
 </lightning-datatable>`

Este es el componente data table de LWC

* Dentro del JS del LWC==>tablaUsuarios.js:

`<import { LightningElement, wire,track } from "lwc";  


import NAME_FIELD from "@salesforce/schema/Account.Name";  

import PHONE_FIELD from "@salesforce/schema/Account.Phone";  

import LASTMODIFIEDBYID_FIELD from "@salesforce/schema/Account.LastModifiedById";  

import Nivel_FIELD from "@salesforce/schema/Account.Nivel__c";  


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
},
{ 
    label: "Ultima Modificacion", 
    fieldName: LASTMODIFIEDBYID_FIELD.fieldApiName, 
    type: "Search(user)"
}    
]; 

export default class contenedorDeTablas extends LightningElement {
    columns = COLUMNS;

//datos que poblaran las tablas nivel 1 y 2
    @track accountsNivel1=[];
    @track accountsNivel2=[];

}`
* Dentro del JS del LWC==>tablasUsuarios.js-meta.xml:

`<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
   <apiVersion>45.0</apiVersion>
   <isExposed>true</isExposed>
   <targets>
       <target>lightning__AppPage</target>
       <target>lightning__RecordPage</target>
       <target>lightning__HomePage</target>
   </targets>
</LightningComponentBundle>`
Te asegura que tu componente se visible dentro de la ORG agregando:

`<isExposed>true</isExposed>
   <targets>
       <target>lightning__AppPage</target>
       <target>lightning__RecordPage</target>
       <target>lightning__HomePage</target>
   </targets>`



