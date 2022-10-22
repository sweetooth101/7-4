"use strict";

const $ = selector => document.querySelector(selector);

let processEntries =()=>{

    let subTotal=document.getElementById('subtotal').value;
    let taxRate=document.getElementById('tax_rate').value;
    if(parseFloat(subTotal)<0 || parseFloat(subTotal)>10000){
        alert("Enter subtotal betweeen 1-10000");
    }

    else if(parseFloat(taxRate)<0 || parseFloat(taxRate)>10000){
        alert("Enter tax rate value betweeen 1-12");
}

    else{
        let tax = (parseFloat(subTotal) * parseFloat(taxRate))/100;
        let total = parseFloat(tax) + parseFloat(subTotal);
        document.getElementById("sales_tax").value = tax.toFixed(2);
        document.getElementById("total").value = total.toFixed(2); 
    }

}

function clearForm(){
document.getElementById('subtotal').value = "";
document.getElementById('tax_rate').value = "";
document.getElementById("sales_tax").value = "";
document.getElementById("total").value = "";
}