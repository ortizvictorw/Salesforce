import { LightningElement} from 'lwc';


let columns = [
    { label: 'Nombre', fieldName: 'name' },
    
    { label: 'Telefono', fieldName: 'phone', type: 'phone' },

    { label: 'Nivel', fieldName: 'nivel', type: 'integer' }

    
   
];


export default class TablaCheckBox extends LightningElement {
nombre = 'Formulario con evento de informacion'
columns = columns;
datauser =[
    {
        id:"1",
        name : 'Victor Ortiz2',
        phone : 341255775,
        nivel:2

    }
    ,{
        id:"2",
        name : 'Dani',
        phone : 341255645,
        nivel:1

    }
];


    getSelectedName(event) {
        const selectedRows = event.detail.selectedRows;
        // Display that fieldName of the selected rows
        for (let i = 0; i < selectedRows.length; i++){
            alert("You selected: " + selectedRows[i].nivel);
        }
    }
}
