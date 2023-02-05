function toggleMenu(){
  document.getElementById("primaryNav").classList.toggle("open");
   document.getElementById("hamburgerBtn").classList.toggle("open");
 }
 const x = document.getElementById('hamburgerBtn');
 x.onclick=toggleMenu;
 
 
 
 const today = new Date();
 const fullDate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
   today
 );
 
 document.querySelector(".header-date").innerHTML = fullDate;
 
 
 
 let dateModified = ('Last Modification: ' + document.lastModified);
 document.getElementById("date-mod").innerHTML = dateModified;
 const year = today.getFullYear();
 document.querySelector("#copyright-year").innerHTML = year;
 if (today.getDay() == 1 || today.getDay() == 2){
   document.querySelector(".banner").classList.toggle("banner-shown");
 
   document.querySelector(".banner-close").addEventListener('click', function() {
   this.closest(".banner").style.display = "none";
 });
 };
 
 
 
 