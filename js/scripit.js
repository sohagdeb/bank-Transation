    document.getElementById('button-login').addEventListener('click',function(){
    const email=document.getElementById("email-input");
    const emailValue = email.value;
    const password = document.getElementById('password');
    const passwordValue = password.value;
    if(emailValue=='sohagdeb578@gmail.com' && passwordValue=='sohag'){
        window.location.href="banking.html";
    }
    else{
        window.location.href="error.html";
    }
})