---
console.log("PW Innovators");
// Push 5 - Uttkarsh Chambiyal: Add contact form validation JS

let myForm = document.getElementById("contact-form");

myForm.onsubmit = function(event){

    event.preventDefault();

    let name = document.getElementById("name");

    let email = document.getElementById("email");

    let message = document.getElementById("message");

    if(name.value.trim()===""){
        alert("Enter name");
    }
    else if(email.value.trim()===""){
        alert("Enter email");
    }
    else if(message.value.trim()===""){
        alert("Enter message");
    }
    else{
        alert("Message Sent Successfully");
        myForm.reset();
    }

};



//pusj6 - abhi

let bodyTag = document.documentElement;

let toggleButton =
document.getElementById("theme-toggle");

toggleButton.onclick = function(){

let current =
bodyTag.getAttribute("data-theme");

if(current==="dark"){
bodyTag.setAttribute("data-theme","light");
toggleButton.textContent="🌙";
}
else{
bodyTag.setAttribute("data-theme","dark");
toggleButton.textContent="☀️";
}

};
