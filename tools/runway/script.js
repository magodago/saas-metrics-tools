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
    var cash=parseFloat(document.getElementById("cash").value,10);
    var burn=parseFloat(document.getElementById("burn").value,10);
    if(isNaN(cash)||cash<0){
      errorMsg.textContent="Please enter a valid available cash amount.";
      errorMsg.hidden=false;
      return;
    }
    if(isNaN(burn)||burn<=0){
      errorMsg.textContent="Please enter a positive monthly burn rate.";
      errorMsg.hidden=false;
      return;
    }
    var runway=cash/burn;
    resultArea.textContent="Runway = "+runway.toLocaleString("en-US",{minimumFractionDigits:1,maximumFractionDigits:1})+" months";
    resultArea.hidden=false;
    resultArea.classList.remove("hidden");
    resultArea.style.opacity="1";
  });
})();
