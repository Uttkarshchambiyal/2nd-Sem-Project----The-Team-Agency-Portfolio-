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
