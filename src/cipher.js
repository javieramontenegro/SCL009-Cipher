window.cipher = {
  encode: (offset,input) => {
    /* Acá va tu código */
     let output ="";
//BUCLE QUE LEE CADA LETRA   
     for(let i=0; i<input.length; i++){
      // TRANSFORMA A NUMERO ASCII
      let ascii= input.charCodeAt(i);
      //CASO MAYUSSCULAS
      if(ascii>=65 && ascii<=90 ){
        let n= parseInt(offset);
        output +=String.fromCharCode((ascii - 65 + n) % 26 + 65)
        
      }
      // CASO MINUSCULAS  
      else if(ascii >= 97 &&  ascii<= 122){
        let n= parseInt(offset);
        output += String.fromCharCode((ascii - 97 + n) % 26 + 97);
}
   // Ñ
else if (ascii==209){
  let n= parseInt(offset);
  output +=String.fromCharCode((ascii - 209 + n) % 26 + 209);

} 

// ñ
else if (ascii==241){
  let n= parseInt(offset);
  output +=String.fromCharCode((ascii - 241 + n) % 26 + 241);}
//ESPACIO Y DEMAS 
  else {output+= input.charAt(i)}
 
}

 return output;
   
     },
  decode: (offset,input) => {
    /* Acá va tu código */
 let outputdes ="";
 for(let i=0; i<input.length; i++){
     let ascii= input.charCodeAt(i);
     if(ascii>=65 && ascii<=90 ){
      let n= parseInt((26-offset)%26);
      outputdes +=String.fromCharCode((ascii-65+n)%26 +65);
      
    }
    else if(ascii >= 97 &&  ascii<= 122){
      let n= parseInt((26-offset)%26);
      outputdes += String.fromCharCode((ascii - 97 + n) % 26 + 97);
}


     // Ñ
else if (ascii >=209 && ascii<= 234){
  
  outputdes +=String.fromCharCode(209);

} 
 // ñ
 else if (ascii >=241 && ascii<= 266){
 
 outputdes +=String.fromCharCode(241);

} 
   




// ESPACIO
 else {outputdes+= input.charAt(i)}

 
}
return outputdes;

}



};
