(function(){
  "use strict";
  var form=document.getElementById("calc-form");
  var resultArea=document.getElementById("result-area");
  var errorMsg=document.getElementById("error-msg");
  if(!form||!resultArea)return;
  form.addEventListener("submit",function(e){
    e.preventDefault();
    errorMsg.hidden=true;
    errorMsg.textContent="";
    var totalCost=parseFloat(document.getElementById("total-cost").value,10);
    var newCustomers=parseInt(document.getElementById("new-customers").value,10);
    if(isNaN(totalCost)||totalCost<0){
      errorMsg.textContent="Please enter a valid total cost.";
      errorMsg.hidden=false;
      return;
    }
    if(isNaN(newCustomers)||newCustomers<1){
      errorMsg.textContent="Please enter at least 1 new customer.";
      errorMsg.hidden=false;
      return;
    }
    var cac=totalCost/newCustomers;
    resultArea.textContent="CAC = $"+cac.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})+" per customer";
    resultArea.hidden=false;
    resultArea.classList.remove("hidden");
    resultArea.style.opacity="1";
  });
})();
