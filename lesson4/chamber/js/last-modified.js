// Controls the menu toggle

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
     document.getElementById("hamburgerBtn").classList.toggle("open");
   }
   
   const x = document.getElementById('hamburgerBtn');
   
   x.onclick=toggleMenu;



// Controls the current date
const today = new Date();
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
       today
   );
document.querySelector(".header-date").innerHTML = fullDate;

// This controls the Last change made
let dateModified = ('Last Modification: ' + document.lastModified);
document.getElementById("date-mod").innerHTML = dateModified;