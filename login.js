const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs()
})

function checkInputs() {
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value

    if (usernameValue === ''){
        setErrorFor(username, "O nome de usuário é obrigatório.");
    }else{
        setSuccessFor(username);
    }

    if (emailValue === ''){
    setErrorFor(email, 'O email é obrigatório.')
    } else if(!checkEmail(emailValue)){
        setErrorFor(email, 'Por favor, insira um email válido.')
    }
    else{setSuccessFor(email);}

    if (passwordValue === ''){
        setErrorFor(password, 'A senha é obrigatória.')
    } else if(passwordValue.length < 7){
        setErrorFor(password, 'A senha precisa ter no mínimo 7 caracteres.')
    }
    else{setSuccessFor(password);}


    const formControls = form.querySelectorAll(".form-control");
    const formIsValid = [...formControls].every((formControl) => {
        return formControl.className === "form-control success";
    });

    if (formIsValid) {
        window.location.replace("paginainicial.html");
    }
}


function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
//Adicionar mensagem de erro
small.innerText = message;
//Adicionar classe de erro
formControl.className =  "form-control error";
}

//Adicionar a classe de sucesso
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className =  "form-control success";
}
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }