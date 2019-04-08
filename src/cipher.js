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
   
   //ESPACIO 
 // else {output+= input.charAt(i)};
   else if (ascii == 32){ 
    let n= parseInt(offset); 
    output +=  String.fromCharCode((ascii - 32 + n) % 1 + 32);  }
   
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
 // ESPACIO
 //else {outputdes+= input.charAt(i)};
 else if (ascii == 32){ 
  let n= parseInt((26-offset)%26); 
  outputdes +=  String.fromCharCode((ascii - 32 + n) % 1 + 32);  }
 
}
return outputdes;

}



};
