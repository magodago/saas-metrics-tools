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
    var avgValue=parseFloat(document.getElementById("avg-value").value,10);
    var frequency=parseFloat(document.getElementById("frequency").value,10);
    var lifetime=parseFloat(document.getElementById("lifetime").value,10);
    if(isNaN(avgValue)||avgValue<0){
      errorMsg.textContent="Please enter a valid average value per purchase.";
      errorMsg.hidden=false;
      return;
    }
    if(isNaN(frequency)||frequency<0){
      errorMsg.textContent="Please enter a valid purchase frequency.";
      errorMsg.hidden=false;
      return;
    }
    if(isNaN(lifetime)||lifetime<0){
      errorMsg.textContent="Please enter a valid customer lifetime.";
      errorMsg.hidden=false;
      return;
    }
    var ltv=avgValue*frequency*lifetime;
    resultArea.textContent="LTV = $"+ltv.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})+" per customer";
    resultArea.hidden=false;
    resultArea.classList.remove("hidden");
    resultArea.style.opacity="1";
  });
})();
