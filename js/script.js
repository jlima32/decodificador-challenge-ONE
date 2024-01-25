function verificaText(){
    return document.getElementById('texto').value;
}

function criptografar(){
    if (verificaText() == ''){
        alert('digite um texto para criptografar ou descriptografar')
    }else{
        let string = document.getElementById('texto').value.toLowerCase();
        let stringAcentos = string.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        let stringE = stringAcentos.replaceAll("e", "enter");
        let stringI = stringE.replaceAll("i", "imes");
        let stringA = stringI.replaceAll("a", "ai");
        let stringO = stringA.replaceAll("o", "ober");
        let stringU = stringO.replaceAll("u", "ufat");
        
        
        document.querySelector('.result').innerHTML =`
        <div class="textResult">
        <textarea name="textoResultado" id="textoResultado" cols="30" rows="30">${stringU}</textarea>
        <button type="button" class="btnCopiar" onclick="copiar()">Copiar Texto</button>
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
        <textarea name="textoResultado" id="textoResultado" cols="30" rows="30">${stringU}</textarea>
        <button type="button" class="btnCopiar" onclick="copiar()">Copiar Texto</button>
        </div>
        `
    }
}

function copiar(){
    console.log('nada')
    let copiarTexto = document.querySelector('#textoResultado');
    copiarTexto.select();
    document.execCommand('copy')
    alert('texto copiado com sucesso!')
}
