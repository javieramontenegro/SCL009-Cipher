let input = document.getElementById("input").value;
let output = document.getElementById("output").value;
let offset=  document.getElementById("offsetcifrado").value;

let btnCifrar= document.getElementById("cifrar");
btnCifrar.addEventListener('click',()=>{
    document.getElementById("output").innerHTML = window.cipher.encode(document.getElementById("offsetcifrado").value,document.getElementById("input").value);
})

//document.getElementById("cifrar")= window.cipher.encode(offset,input);

//btnCifrar.addEventListener('click',()=>{window.cipher(document.getElementById("cifrar")= window.cipher.encode(offset,input)) })
