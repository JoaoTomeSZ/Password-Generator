const numerosBox = document.getElementById("numeros-checkbox");
const especialBox = document.getElementById("especial-checkbox");
const allBox = document.getElementById("all-checkbox");
const btn = document.getElementById("result-btn");
const senha = document.getElementById("senha");
const copyBtn = document.getElementById("copy")


const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const letraEchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*";
const all = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*1234567890";
const letraEnum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

var password = "";


btn.addEventListener("click", function(){
    console.log(gerarSenha())

        document.getElementById("senha").innerText = password;
        if(allBox.checked){
            numerosBox.checked = false;
            especialBox.checked = false;
        }
        if(password != ""){
            password = ""
        }
        
})  
copyBtn.addEventListener('click', function(){
    console.log(copyPassword())
    
});



function copyPassword(){
    var content = document.getElementById('senha').innerHTML;
    navigator.clipboard.writeText(content)
}

function gerarSenha(){
    var length = document.getElementById("number-input").value;
    if(numerosBox.checked){
        for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * letraEnum.length);
            password += letraEnum[randomIndex];
        }
    }else if(especialBox.checked){
        for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * letraEchar.length);
            password += letraEchar[randomIndex];
        }
    }else if((allBox.checked)){
        for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * all.length);
            password += all[randomIndex];

        }
    }else{
        for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * letras.length);
            password += letras[randomIndex];
        }
    }
        
}
