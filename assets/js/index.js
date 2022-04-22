let textArea = document.getElementById('textArea');
let contentPhrase = document.getElementById('contentPhrase');
let encryptBtn = document.getElementById('encryptBtn');
let decryptBtn = document.getElementById('decryptBtn');
let copyBtn = document.getElementById('copyBtn');

let contentPhraseGlobal = '';

function encrypt(frase) {
    frase = frase.replaceAll('e', 'enter');
    frase = frase.replaceAll('i', 'imes');
    frase = frase.replaceAll('a', 'ai');
    frase = frase.replaceAll('o', 'ober');
    frase = frase.replaceAll('u', 'ufat');
    return frase;
}

function decrypt(frase) {
    frase = frase.replaceAll('enter', 'e');
    frase = frase.replaceAll('imes', 'i');
    frase = frase.replaceAll('ai', 'a');
    frase = frase.replaceAll('ober', 'o');
    frase = frase.replaceAll('ufat', 'u');
    return frase;
}

encryptBtn.addEventListener('click', () => {
    let frase = textArea.value;
    let fraseCriptografada = encrypt(frase);
    //console.log(fraseCriptografada);
    contentPhrase.innerText = fraseCriptografada;
    contentPhraseGlobal = fraseCriptografada;
    frase = '';
});



decryptBtn.addEventListener('click', () => {
    let frase = textArea.value;
    let fraseDescriptografada = decrypt(frase);
    //console.log(fraseDescriptografada);
    contentPhrase.innerText = fraseDescriptografada;
    contentPhraseGlobal = fraseCriptografada;
    frase = '';
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(contentPhraseGlobal);
    alert('Copiado');
});

