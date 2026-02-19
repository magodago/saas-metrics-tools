(function(){
  "use strict";
  document.addEventListener("DOMContentLoaded",function(){
    var leadForm=document.getElementById("lead-form");
    if(leadForm){
      leadForm.addEventListener("submit",function(e){
        e.preventDefault();
        var email=document.getElementById("lead-email");
        if(email&&email.value.trim()){
          console.log("Lead capture placeholder - email:",email.value.trim());
          alert("Thanks! Download link would be sent to "+email.value.trim()+" (integrate MailerLite/ConvertKit)");
        }else{
          alert("Please enter your email.");
        }
      });
    }
    var imgs=document.querySelectorAll("img[data-src]");
    if("loading"in HTMLImageElement.prototype){
      imgs.forEach(function(img){ img.src=img.getAttribute("data-src")||img.src; });
    }else{
      imgs.forEach(function(img){ img.src=img.getAttribute("data-src")||img.src; });
    }
  });
})();
