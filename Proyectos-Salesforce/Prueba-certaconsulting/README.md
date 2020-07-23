## Proyecto Examen de certaconsulting

 
![Developer](https://avatars0.githubusercontent.com/u/57049891?s=460&u=3479716881907edaf1bbcfa5c0a6b2ac52c2817d&v=4)

### Objetivos

1. Salesforce posee una serie de objetos standar, uno de ellos es el objeto cuenta. La idea de este ejercicio es primero poder crear un campo llamado 
nivel__c para el objeto cuenta con dos valores posibles: Nivel 1 y Nivel 2.
Una vez finalizado esto, poder generar una nueva página de lightning donde se muestran en dos tablas distintas las cuentas de nivel 1 y las cuentas de nivel 
2. Estas tablas deben poseer 4 columnas, que serán, el nombre de la cuenta, el teléfono de la cuenta, la persona que lo modificó por última vez y una columna 
vacía donde aparecerá un checkbox por cada cuenta.
Por otro lado habrá un botón llamado "actualizar nivel de las cuentas" que lo que hará será tomar las cuentas que tengan el checkbox tildado y cambiarles el 
nivel, si son de nivel 1 pasan a nivel 2 y si son de nivel 2 pasarán a nivel 1.
Actualizando también esta tabla para que se vean los resultados.


********************************************## Sprint 1**************************************************

### "PREPARANDO ENTORNO DE TRABAJO"

___SFDX

* SALESFORCE
* DEVELOPER
* EXPERIENCE


### Integrar SalesForce con VisualStudio Code


* instalar la Command Line Interface (CLI)

    -Utilice la CLI de Salesforce para controlar todo el ciclo de vida de sus 
    aplicaciones de Salesforce. Con la CLI, podrá crear o conectar fácilmente 
    entornos de desarrollo y pruebas, además de sincronizar metadatos y códigos 
    entre sus organizaciones y un sistema de control de versiones.

* Instalar extension SalesForce Extension Pack 
	-Paquete de extensión (7)
### Contenido:
### Apex
Provides code-editing features for the Apex programming language
Salesforce

### Apex Interactive Debugger
Provides debugging support for the Apex programming language
Salesforce

### Apex Replay Debugger
Replay Apex execution from Apex Debug Log
Salesforce

### Salesforce CLI Integration
Provides integration with the Salesforce CLI
Salesforce

### Aura Components
Provides code-editing features for Aura Components
Salesforce

### Visualforce
Provides syntax highlighting for the Visualforce framework
Salesforce


## Crear un proyecto

Pulse Comando + Mayús. + P en Mac o Ctrl + Mayús. + P en Windows para que 
aparezca la paleta de comandos.
Asegúrese de que la nueva secuencia comience con el símbolo >
** Ingrese SFDX: Create Project
