import { LightningElement, api } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import PHONE_FIELD from "@salesforce/schema/Account.Phone";
import Nivel_FIELD from "@salesforce/schema/Account.Nivel__c"; 




export default class ImputRecord extends LightningElement {
    @api registroid
    objectApiName = ACCOUNT_OBJECT;
    nameField = NAME_FIELD;
    Nivel__c = Nivel_FIELD;
    Phone = PHONE_FIELD;
    
  
    handleReset() {
        const inputFields = this.template.querySelectorAll("lightning-input-field");
        if (inputFields) {
          inputFields.forEach(field => {
            field.reset();
          });
        }
      }
    
      handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
          title: "Account created",
          message: "Record ID: " + event.detail.id,
          variant: "success"
        });
        this.dispatchEvent(toastEvent);
      }
    }
    