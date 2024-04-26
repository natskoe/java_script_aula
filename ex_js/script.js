window.onload = function(){

    let paragrafo = document.getElementById("texto");
    paragrafo.innerHTML = "Olá, Mundo!";

    let cores = ["#657","#095"]
    let controleCor = 0;

    let botao = document.getElementById("botao");
    console.log(botao);

    function alterarCor(){
        paragrafo.style.backgroundColor = cores[controleCor];
        controleCor = controleCor == 0 ? 1 : 0;
    }

    let select = document.getElementById("select");

    function adicionarParagrafo(){
        let container = document.getElementById("container_select");
        let paragrafo = document.createElement("p");
        paragrafo.innerHTML = this.value;
        container.appendChild(paragrafo)
    }
    
    let formulario = document.getElementById("formulario");
    function validarCampo(){
        let camposVazios = "";
        for(let i = 0; i<formulario.children.length; i++){
            if(formulario.children[i].value == ""){
                camposVazio += `${formulario.children[i].name}, `
            }
        }
    }
    let mensagem = document.getElementById("resultado");
    if (camposVazios == ""){
        mensagem.innerHTML = `Formulário enviado!`
    }else{
        camposVazios = camposVazios.trim();
        camposVazios = camposVazios.substring(0,camposVazios.length-1);
        mensagem.innerHTML = `Os campos ${camposVazios} estão vazios!`;
    }

    formulario.addEventListener("submit", validarCampo);
    select.addEventListener("change", adicionarParagrafo);
    botao.addEventListener("click",alterarCor);
}