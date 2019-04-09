describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof window.cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () =>{assert.equal(window.cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");});
 
    it('debería retornar "BIFU DUPCåå" para "HOLA JAVIÑÑ" con offset 20', () =>{assert.equal(window.cipher.encode(20,"HOLA JAVIÑÑ"),"BIFU DUPCåå");});
    
    it('debería retornar "bifu dupcąą" para "hola javiññ" con offset 20', () =>{assert.equal(window.cipher.encode(20,"hola javiññ"),"bifu dupcąą");});

    it('debería retornar " " para " " con offset 20', () =>{assert.equal(window.cipher.encode(20," ")," ");});
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof window.cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "ZABCDEFGHIJKLMNOPQRSTUVWXY" con offset 25', () => {assert.equal(window.cipher.decode(25, "ZABCDEFGHIJKLMNOPQRSTUVWXY"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");});
   
    it('debería retornar "szwl ulgtüü" para "hola javiññ" con offset 11', () => {assert.equal(window.cipher.decode(11, "szwl ulgtüü"),"hola javiññ");});
  
    it('debería retornar "SZWL"ULGTÜÜ" para "HOLA JAVIÑÑ" con offset 11', () => {assert.equal(window.cipher.decode(11, "SZWL ULGTÜÜ"),"HOLA JAVIÑÑ");});
 
  });


});
