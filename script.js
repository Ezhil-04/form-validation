
let namespan=document.getElementById("namespan")
let phnospan=document.getElementById("phnospan")
let emailspan=document.getElementById("emailspan")
let msgspan=document.getElementById("msgspan")
let submitspan=document.getElementById("submitspan")

let nameinput=document.getElementById("nameinput")
let phnoinput=document.getElementById("phnoinput")
let emailinput=document.getElementById("emailinput")
let msginput=document.getElementById("msginput")

nameinput.addEventListener("keyup",validname)
phnoinput.addEventListener("keyup",validphno)
emailinput.addEventListener("keyup",validemail)


function validname(){
 

    if(nameinput.value.length==0){
        namespan.innerHTML="Enter your name"
        return false;
    
    }

    if(!nameinput.value.match (/^[A-z][a-z]+(?: [A-z]+)*$/))
    {
      namespan.innerHTML=`<i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i>`
      return false
    }
    


   

    namespan.innerHTML=`<i class="fa-solid fa-check" style="color: #1fbd0a;"></i>`
    return true
   

}

function validphno(){


    if(phnoinput.value.length==0){
        phnospan.innerHTML="Enter your Phnone number"
        return false;
    }
    if(!phnoinput.value.match(/^(?:(?:\+?1\s*(?:[.-]\s*)?)?\(?(\d{3})\)?[-\s.]?\d{3}[-\s.]?\d{4})(?:\s*(?:#|ext\.)\s*(\d+))?$/
))
    {
      phnospan.innerHTML=`<i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i>`
      return false
    }

    phnospan.innerHTML=`<i class="fa-solid fa-check" style="color: #1fbd0a;"></i>`
    return true
   

}


function validemail(){


    if(emailinput.value.length==0){
        emailspan.innerHTML="Enter your E-mail"
        return false;
    }
    if(!emailinput.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.(?:[a-zA-Z0-9-]*[a-zA-Z0-9])+$/

))
    {
      emailspan.innerHTML=`<i class="fa-solid fa-circle-xmark" style="color: #ff0000;"></i>`
      return false
    }

    emailspan.innerHTML=`<i class="fa-solid fa-check" style="color: #1fbd0a;"></i>`
    return true
   

}

function validateform(){

    if(!validname()|| !validphno()|| !validemail()){
        submitspan.style.display="block"
        submitspan.innerHTML="please enter valid details"
    setTimeout(()=>{
        submitspan.style.display="none"
    },3000)
        return false
    }
    
    return true
}
