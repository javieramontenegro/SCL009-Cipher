describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof window.cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () =>{assert.equal(window.cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");});
 
    it('debería retornar "BIFU DUPC" para "HOLA JAVI" con offset 20', () =>{assert.equal(window.cipher.encode(20,"HOLA JAVI"),"BIFU DUPC");});
    
    it('debería retornar "bifu dupc" para "hola javi" con offset 20', () =>{assert.equal(window.cipher.encode(20,"hola javi"),"bifu dupc");});

    it('debería retornar " " para " " con offset 20', () =>{assert.equal(window.cipher.encode(20," ")," ");});
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof window.cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "ZABCDEFGHIJKLMNOPQRSTUVWXY" con offset 25', () => {assert.equal(window.cipher.decode(25, "ZABCDEFGHIJKLMNOPQRSTUVWXY"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");});
   
    it('debería retornar "szwl ulgt" para "hola javi" con offset 11', () => {assert.equal(window.cipher.decode(11, "szwl ulgt"),"hola javi");});
  
    it('debería retornar "SZWL"ULGT para "HOLA JAVI" con offset 11', () => {assert.equal(window.cipher.decode(11, "SZWL ULGT"),"HOLA JAVI");});
 
  });


});
