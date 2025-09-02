//Toggle mobile menu 
const menuToggle=
      document.get ElemetById("menu-toggle");
const navLinks=
      document.getElementById("nav-likns");

menuToggle.addEvent
Listener("click",()=>
     {
  navLinks.classList.toggle("Show");
  });
//Simple contact form validation 
const contactForm=
      document.gerElementById("contact-form");
const formStatus=
      document.getElementById("form-status");

contactForm.addEventListener("submit",(e)=>
           {
  e.preventDefault();
  const name=        document.getElementById("name").value.trim();
  const email=       document.getElementById("email").value.trim();
  const message=
 document.getElementById("message").value.trim();
  
  if(name && email && message){
    formStatud.textContent="✅ message sent successfully!";
    formStatus.style.color="green";
    contactForm.reset();
    }else{
      formStatus.textContent="❌ please fill in all fields.";
      formStatus.style.color="red";
      }
  });