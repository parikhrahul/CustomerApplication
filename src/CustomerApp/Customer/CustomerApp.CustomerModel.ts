import {NgForm,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder } from '@angular/forms'


// Create :- We create the validation object model
// Connect :- We connect the validation to the UI
// Check :- IsValid , IsDirty

export class Customer {
CustomerCode : string = "";
CustomerName : string = "";
CustomerAmount : number = 0;
formGroup: FormGroup;
constructor(){
    var _builder = new FormBuilder();
    this.formGroup = _builder.group({}); 
    
    // Use the builder to create 
    // control --> validation
    // 1 control --> 1 validation

    // Customer code control --> 
        //  Required , 4 letter numeric
    var validationcollection = [];
    validationcollection.push(Validators.required);
    validationcollection.push(Validators.pattern("^[0-9]{4,4}$"));

    this.formGroup.addControl("CustomerNameControl", new FormControl('', Validators.required));  

    

    this.formGroup.addControl("CustomerCodeControl", new FormControl('', Validators.compose(validationcollection)));


}
}