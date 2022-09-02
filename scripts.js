function addTexto() {

    const formControl = document.querySelector(".form-control").value;
    

    
}








const saudacao = document.querySelector("#prim-fala");
 saudacao.textContent = "Olá eu sou o ProgBot!";


 const primFala = document.querySelector("#element");
 primFala.innerHTML = "Estou aqui para solucionar suas principais dúvidas sobre o fantástico mundo da programação!                                    (Pressione o botão enviar)"



// evento de enviar a resposta 

const envResp = document.querySelector("#btn");

envResp.addEventListener("click", function(e) {

primFala.textContent = "O que você gostaria de saber hoje?"

envResp.addEventListener("click", function(e) {

    primFala.textContent = "(1)Áreas da programação."

});

});