window.cipher = {
  encode: (offset,input) => {
    /* Acá va tu código */
    //let input = document.getElementById("input");
    //let output = document.getElementById("output");
    //let des=  document.getElementById("offsetcifrado");
  
     let output ="";
   for(let i=0; i<input.length; i++){
       let ascii= input.charCodeAt(i);
       if(ascii>=65 && ascii<=90 ){
        let n= parseInt(offset);
        output +=String.fromCharCode((ascii - 65 + n) % 26 + 65)
        console.log(output);
      }
   
   }
    
      
   return output;
   
   
   
  },
  decode: () => {
    /* Acá va tu código */
  }
};
