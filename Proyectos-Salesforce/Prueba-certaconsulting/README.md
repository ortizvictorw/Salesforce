## Proyecto de Tablas Dinámicas en Salesforce con "Lightning Web Component"
### Developer **Ortiz Victor**
<img src="https://avatars0.githubusercontent.com/u/57049891?s=460&u=3479716881907edaf1bbcfa5c0a6b2ac52c2817d&v=4" width="100" height="100" />

### Objetivos del Proyecto

Salesforce posee una serie de objetos standar, uno de ellos es el objeto cuenta. La idea de este ejercicio es primero:

* poder crear un campo llamado nivel__c para el objeto cuenta con dos valores posibles: Nivel 1 y Nivel 2.

* poder generar una nueva página de lightning donde se muestran en dos tablas distintas las cuentas de nivel 1 y las cuentas de nivel 2

* Estas tablas deben poseer 4 columnas, que serán, el nombre de la cuenta, el teléfono de la cuenta, la persona que lo modificó por última vez y una columna vacía donde aparecerá un checkbox por cada cuenta.

* habrá un botón llamado "actualizar nivel de las cuentas" que lo que hará será tomar las cuentas que tengan el checkbox tildado y cambiarles el nivel, si son de nivel 1 pasan a nivel 2 y si son de nivel 2 pasarán a nivel 1.

* Actualizando también esta tabla para que se vean los resultados.
___ 
## Imagen del Proyecto
<img src="https://raw.githubusercontent.com/ortizvictorw/Salesforce/master/Proyectos-Salesforce/Prueba-certaconsulting/Final.png" width="600" height="800" />

# Resumen
* Se crea un campo personalizado llamado ***nivel__c-*** para el objeto cuenta de tipo lista de seleccion con valores 1 y 2.
* Se utiliza ***lightning-datatable*** de lightning web component para generar las tablas de nivel 1 y nivel 2
* Dichas tablas se poblaran con cuentas creadas desde un ***lightning-record-edit-form*** 
* Una vez seleccionado el campo de la cuenta la informacion se modificara al hacer click en el boton ***Actualizar***

 
