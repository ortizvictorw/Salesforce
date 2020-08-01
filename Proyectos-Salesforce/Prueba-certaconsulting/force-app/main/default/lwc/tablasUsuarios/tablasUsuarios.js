import { LightningElement, wire } from "lwc";

import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { reduceErrors } from "c/ldsUtils";


import NAME_FIELD from "@salesforce/schema/Account.Name";
import PHONE_FIELD from "@salesforce/schema/Account.Phone";
import Nivel_FIELD from "@salesforce/schema/Account.Nivel__c";  
/* import createAccount from "@salesforce/apex/crud.createAccount"; */
import getAccounts from "@salesforce/apex/crud.getAccounts";
import getAccounts2 from "@salesforce/apex/crud.getAccounts2";


import { refreshApex } from "@salesforce/apex";

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
  }  ,
  { 
      label: "Nivel", 
      fieldName: Nivel_FIELD.fieldApiName, 
      type: "integer"}  
]; 

export default class ApexImperative extends LightningElement {
  columns = COLUMNS;
  

  //consulat de cuentas 

  @wire(getAccounts)
  accounts;
  

  get errors() {
    return this.accounts.error ? reduceErrors(this.accounts.error) : [];
  }

  @wire(getAccounts2)
  accounts2;
  

  get errors() {
    return this.accounts2.error ? reduceErrors(this.accounts2.error) : [];
  }

 /*  //creador de cuenta
  handleClickCrear() {
    getAccounts()
      .then(data => {
        if (data.Nivel==1){
            refreshApex(this.accounts);
        }if(data.Nivel==2)
        refreshApex(this.accounts2);
        
       
      })
      .catch(error => {
        const toastEvent = new ShowToastEvent({
          title: "Error creating account",
          message: "Error: " + reduceErrors(error).join(","),
          variant: "error"
        });
        this.dispatchEvent(toastEvent);
      });
  }
  */
  getSelectedName() {
    const selectedRows = event.detail.selectedRows;
    for (let i = 0; i < selectedRows.length; i++){
     console.log(selectedRows[i].Id)
     
    }
}

   
    

}


  
 /*     console.log('Debug')
     let nivel1=this.template.querySelector('.nivel1').getSelectedRows();
     console.log('Nivel1 ',nivel1)
     let nivel2=this.template.querySelector('.nivel2').getSelectedRows();
     console.log('Nivel2 ',nivel2)
  }  */
