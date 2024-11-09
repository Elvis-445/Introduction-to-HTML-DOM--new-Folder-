function validate(e){
    e.preventDefault();

    const email=document.getElementById('email').value
    const password=document.getElementById('password').value
    const msgBox=document.getElementById('message').value
    const age=document.getElementById('age').value

    let message='';

    if(email===''){
        message= 'Please enter your email address!'
        msgBox.style.color='red';
    }else if(pass===''){
        message= 'Please enter your password!'
        msgBox.style.color='red';
    }else if(age===''){
        message= 'Please enter your age!'
        msgBox.style.color='red';
    }else {
    message= 'Log in Successful!'
    msgBox.style.color='green';
    }
    msgBox.innertext=message
}
