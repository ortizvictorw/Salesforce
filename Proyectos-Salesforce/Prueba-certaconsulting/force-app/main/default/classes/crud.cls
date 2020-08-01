public with sharing class crud {

    @AuraEnabled(cacheable = true)
    public static List<Account> getAccounts() {
      return [
        SELECT ID, Name, Phone , Nivel__c 
        FROM Account
        WHERE (Nivel__c = 1)
        WITH SECURITY_ENFORCED
        ORDER BY Name
      ];
    }

     @AuraEnabled(cacheable = true)
    public static List<Account> getAccounts2() {
      return [
        SELECT ID, Name, Phone , Nivel__c 
        FROM Account
        WHERE (Nivel__c = 2)
        WITH SECURITY_ENFORCED
        ORDER BY Name
      ];
    } 
    
    

   /*  @AuraEnabled
    public static Account createAccount() {
      Account acct = new Account();
      acct.Name = 'joana pacheco';
      acct.Phone= '341647755';
      acct.Nivel__c= 2;  

      
     
      
     insert acct;
     return acct;
    } */
   
  }
  
  


/* @AuraEnabled
  public static Account createAccount() {
    Account usuarioa = new Account();
    usuarioa.Name = 'Cruzcampo';
    usuarioa.Phone = 3412617775;
    usuarioa.Nivel__c = 1;

    insert usuarioa;
   
    return usuarioa;

    ID acctID = usuarioa.Id;
    // Display this ID in the debug log
    System.debug('ID = ' + acctID);
  }
  */
  


