function verificaText(){
    return document.getElementById('texto').value;
}

function criptografar(){
    if (verificaText() == ''){
        alert('digite um texto para criptografar ou descriptografar')
    }else{
        let string = document.getElementById('texto').value;
        let stringE = string.replaceAll("e", "enter");
        let stringI = stringE.replaceAll("i", "imes");
        let stringA = stringI.replaceAll("a", "ai");
        let stringO = stringA.replaceAll("o", "ober");
        let stringU = stringO.replaceAll("u", "ufat");
        
        
        document.querySelector('.result').innerHTML =`
        <div class="textResult">
        <p class="text">${stringU}</p>
        <button type="button" class="btnCopiar">Copiar Texto</button>
        </div>
        `
    }
}


function descriptografar(){
    if (verificaText() == ''){
        alert('digite um texto para criptografar ou descriptografar')
    }else{
        let string = document.getElementById('texto').value;
        let stringE = string.replaceAll("enter", "e");
        let stringI = stringE.replaceAll("imes", "i");
        let stringA = stringI.replaceAll("ai", "a");
        let stringO = stringA.replaceAll("ober", "o");
        let stringU = stringO.replaceAll("ufat", "u");
        
        document.querySelector('.result').innerHTML =`
        <div class="textResult">
        <p class="text">${stringU}</p>
        <button type="button" class="btnCopiar">Copiar Texto</button>
        </div>
        `
    }
}

