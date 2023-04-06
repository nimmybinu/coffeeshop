var nameerror=document.getElementById('name-error');
var phoneerror=document.getElementById('phone-error');
var emailerror=document.getElementById('email-error');
var submiterror=document.getElementById('submit-error');

function validateName(){
    var name= document.getElementById('contact-name').value;
    if(name.length == 0){
        nameerror.innerHTML = 'Name is required';
        return false;
    }
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if(!regName.test(name)){
        nameerror.innerHTML = 'write full name';
        return false;
    }

    
    nameerror.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}
function validatePhone(){
    var phone= document.getElementById('contact-phone').value;
    if(phone.length == 0){
        phoneerror.innerHTML = '*phone no. is required';
        return false;
    }
    if(phone.length !== 10){
        phoneerror.innerHTML = '*phone no. should be 10 digit';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneerror.innerHTML = '*only 10 digits please';
        return false;
    }
    phoneerror.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateEmail(){
    var email= document.getElementById('contact-email').value;
    if(email.length == 0){
        emailerror.innerHTML = '*email  is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailerror.innerHTML = '*email  invalid';  
        return false;
    }
    emailerror.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() ){
        submiterror.style.display='block';
        submiterror.innerHTML ='plaese fix the error to submit';
        setTimeout(function() {submiterror.style.display='none';},3000);
        return false;
    }
}

