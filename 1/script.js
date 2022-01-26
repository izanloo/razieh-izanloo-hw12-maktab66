const massages=document.getElementById("open-modal");
const firstName=document.getElementById("first-name");
const lastName=document.getElementById("last-name");


function send(){
    if(firstName.value == '' || lastName.value == '' ) {
        alert("پرکردن فیلد نام و نام خانوادگی الزامی می باشد")
    }

     else if (firstName.value.length <3 || lastName.value.length <3) {
        alert("طول فیلد نام و نام خانوادگی نباید کمتر از 3 باشد")
        firstName.style.borderColor="red";
        //add element
        lastName.style.borderColor="red";
        const validation = document.createElement("p");
        const valueValidation = document.createTextNode("validation");
        validation.appendChild(valueValidation);
        validation.style.color="red"
        firstName.after(validation);
        //add element
        const validation2 = document.createElement("p");
        const valueValidation2 = document.createTextNode("validation");
        validation2.appendChild(valueValidation2);
        validation2.style.color="red"
        lastName.after(validation2);

     }
     
    else{
        massages.style.display="block";
        setTimeout(function(){
            window.location.reload(1);
         }, 8000);

    }
   }
    

   