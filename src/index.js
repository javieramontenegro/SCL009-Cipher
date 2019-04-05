//let input = document.getElementById("input").value;
//let output = document.getElementById("output").value;
//let offset=  document.getElementById("offsetcifrado").value;

//BOTON PARA CIFRAR
let btnCifrar= document.getElementById("cifrar");
btnCifrar.addEventListener('click',()=>{
    document.getElementById("output").innerHTML = window.cipher.encode(document.getElementById("offsetcifrado").value,document.getElementById("input").value);
});

//BOTON PARA DESCIFRAR
let btnDescifrar = document.getElementById("descifrar");
btnDescifrar.addEventListener('click',()=>{
    document.getElementById("desoutput").innerHTML = window.cipher.decode(document.getElementById("offsetdescifrado").value,document.getElementById("inputdescifrar").value);
} );
