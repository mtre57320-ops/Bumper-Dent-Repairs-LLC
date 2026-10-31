let lang='en';
function toggleMenu(){document.getElementById('nav').classList.toggle('open')}
function toggleLanguage(){
  lang=lang==='en'?'es':'en';
  document.querySelectorAll('[data-en]').forEach(el=>el.innerHTML=el.dataset[lang]);
  document.documentElement.lang=lang;
}
function sendForm(e){
  e.preventDefault();
  alert(lang==='en'?'Thanks! Please call (956) 371-9738 to complete your estimate request.':'¡Gracias! Llame al (956) 371-9738 para completar su solicitud de cotización.');
}
