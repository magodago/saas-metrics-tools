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
    var mrr=parseFloat(document.getElementById("mrr-total").value,10);
    if(isNaN(mrr)||mrr<0){
      errorMsg.textContent="Please enter a valid MRR amount.";
      errorMsg.hidden=false;
      return;
    }
    resultArea.textContent="MRR = $"+mrr.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})+" / month";
    resultArea.hidden=false;
    resultArea.classList.remove("hidden");
    resultArea.style.opacity="1";
  });
})();
