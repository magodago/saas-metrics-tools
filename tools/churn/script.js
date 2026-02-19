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
    var lost=parseInt(document.getElementById("lost").value,10);
    var total=parseInt(document.getElementById("total").value,10);
    if(isNaN(lost)||lost<0){
      errorMsg.textContent="Please enter a valid number of customers lost.";
      errorMsg.hidden=false;
      return;
    }
    if(isNaN(total)||total<1){
      errorMsg.textContent="Please enter at least 1 total customer.";
      errorMsg.hidden=false;
      return;
    }
    if(lost>total){
      errorMsg.textContent="Lost customers cannot exceed total customers.";
      errorMsg.hidden=false;
      return;
    }
    var churn=(lost/total)*100;
    resultArea.textContent="Churn rate = "+churn.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})+"%";
    resultArea.hidden=false;
    resultArea.classList.remove("hidden");
    resultArea.style.opacity="1";
  });
})();
