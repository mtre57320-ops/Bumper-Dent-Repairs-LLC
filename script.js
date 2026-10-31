function toggleMenu(){document.getElementById("nav").classList.toggle("show")}
function setLanguage(language){
  document.querySelectorAll("[data-en]").forEach(el=>{
    el.textContent=el.getAttribute("data-"+language);
  });
  document.getElementById("enBtn").classList.toggle("active",language==="en");
  document.getElementById("esBtn").classList.toggle("active",language==="es");
  localStorage.setItem("language",language);
}
const savedLanguage=localStorage.getItem("language");
if(savedLanguage)setLanguage(savedLanguage);
function submitForm(event){
  event.preventDefault();
  alert("Thank you! We will contact you soon.");
}
