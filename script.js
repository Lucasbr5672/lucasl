function validaFormulario() {
    
    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.getElementById("senha").value;

    console.log(senha)

    // validação de campos vazios
    if(nome === '' || email === '' || senha === ''){
        alert("Por favor, preencha os campos vazios!")
        return
    }

    // Validação do campo do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(email)){
        alert("Digite um e-mail válido!")
        return
    }

    // verificar tamanho da senha
    if(senha.length > 8 ){
        alert("A senha excedeu os limites de caracteres")
        return
    }
    
    alert("Cadastro foi realizado com sucesso!")
}