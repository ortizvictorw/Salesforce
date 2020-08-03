public with sharing class crud {

//cacheable = true==> guarda en la cache  
//consulta las cuentas y devuelve los campos ID, Name, Phone , Nivel__c para poblar las tablas
//de las Account
//cuando nivel__c sea 1 o 2 (es un campo de seleccion)

    @AuraEnabled(cacheable = true)
    public static List<Account> getAccounts() {
      return [
        SELECT ID, Name, Phone , Nivel__c, lastModifiedBy.Name, lastModifiedById
        FROM Account
        WHERE Nivel__c IN ('1','2')
        WITH SECURITY_ENFORCED
        ORDER BY Name
      ];
    }
    
    @AuraEnabled(cacheable=false)

//accountsToUpdate ==> son las filas seleccionadas convertidas en listas de cuentas   
    public static List<Account> updateAccounts(List<Account> accountsToUpdate){
//itera la lista de cuentas        
        for(Account accountToUpdate:accountsToUpdate){
//pregunta por cada item/cuaenta de la lista se pregunta si es de nivel 1 cambialo a 2 y viceversa             
            if(accountToUpdate.Nivel__c=='1'){
                accountToUpdate.Nivel__c='2';
            }else if(accountToUpdate.Nivel__c=='2'){
                accountToUpdate.Nivel__c='1';
            }
        }
//realiza el update de los cambios        
        update accountsToUpdate;
 
//retorta la info a la consulta de las cuentas para actualizar la informacion
        return getAccounts();
    }
}