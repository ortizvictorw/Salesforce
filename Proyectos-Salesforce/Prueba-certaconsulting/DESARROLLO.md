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

* Dentro del archivo tablasUsuarios.html :
* insertar el componente database

* Dentro de tablaUsuarios.js:
* importar las columnas estandar y custom.
* importar los decoradores wire,track.   
* crear el evento que disparará la consulta de las cuentas " @wire(getAccounts, {})"

### Funcionamiento:

* Dentro del archivo contolador crud.cls, se encuentra un metodo que realiza la consulta a los servidores de salesforce, la consulta filta de todas la cuentas, solo aquellas las cuales tenas como nivel 1 o 2 y de las mismas solo trae su "ID, Name, Phone , Nivel__c, LastModifiedById ", y retorna una lista con todas las cuentas filtradas, para poblar la datatable.

* Segun la data de la consulta la funcion dentro de js, implementa un condicional que dice lo siguiente:

* Si la consulta devuelve listas de cuentas iterame esas cuentas y la que cuyo nivel sean 1 agregalas a la datatable Nivel 1 y las que su nivel sean 2 agregalas a la datatable Nivel 2;

___

# Sprint 3 "Capturar la row seleccionada"

* se crea una clase dentro de cada tabla ---class="nivel1"/class="nive2"----, para referenciarlas de javscript, cuando el usuarios haga click en el checkbox que viene por defecto en las datatbles, sera capturado la informacion de dicha fila y almacenanda dentro de una variables, lo mismo para las dos columnas

* Como esto posiblemente creara dos variables, antes de procesarlas se concateneran.


# Sprint 4 "Crear el boton actualizar"

* en elarchivo html crearemos un lightning-button con un evente onclick, que disparará la funcion de Actualizar dentro de js llamada "handleClickActualizar"

* Dentro de la funcion handleClickActualizar, colocaremos las variables capturadas ya concaenadas.

* Crearemos el metodo "updateAccounts" dentro del controlador crud.

* Este metodo recibira cuentas a actualizar y realizara el update de cada una iterando en ellas y preguntandose que nivel poseen y cambiandolo al contrario

* luego realiza el update y retorna el metodo de consulta de las cuentas.

# Sprint 5 "Esperando a promesa para actualizar"

* Luego de iterar las cuentas capturadas , pasarlas al metodo y modificarles su nivel , esa data vuelve como una promesa al javascript, el mismo toma esa data y con una condicion determina el destino de dichas cuentas actualizadas.

