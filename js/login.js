const button=document.getElementById('login-button').addEventListener('click',function(){
    // for getting email
    const emailField=document.getElementById('email');
    const userEmail=emailField.value;
    //for getting password
    const passwordField=document.getElementById('password');
    const userPassword=passwordField.value;
   
    if( userEmail=='asif@gmail.com' && userPassword=='asif'){
        window.location.href='banking.html'
    }else{
        alert('Invalid user')
    }

    

})
