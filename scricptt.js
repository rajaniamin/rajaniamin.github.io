// Cypress.on('uncaught:exception', (err, runnable) => {
//   return false;
// });

let i=0;
let txt="Java Backend Developer";
let speed=80;

typeWriter();

function typeWriter() {
    if(i < txt.length){
      document.getElementById("user-detail-name").style.color="white";
      document.getElementById("demo1").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    else {
      i = 0;
      document.getElementById("demo1").innerHTML = "";
      document.getElementById("user-detail-name").style.color="#000000";
      setTimeout(typeWriter, speed);
    }
  }


  var myNav = document.getElementById('nav-menu');
  var myNav2 = document.getElementById('main');
  window.onscroll = function () { 
      if ( document.documentElement.scrollTop >= 15 ) {
          myNav.classList.add("nav-colored");
          myNav2.classList.add("nav-colored");
         // myNav.classList.remove("nav-transparent");
      } 
      else {
           myNav.classList.add("nav-transparent");
          myNav.classList.remove("nav-colored");
        //  myNav2.classList.remove("nav-colored");
      }
  };

  GitHubCalendar(".calendar", "rajaniamin", {
    responsive: true,
    global_stats: false,
    tooltips: true,
  });

  document.getElementById("resume-button-1").onclick=()=>{
window.open("https://drive.google.com/file/d/1lajjjme0ZohMa60ZicQrLqQEAEo4SCQK/view?usp=share_link");
  }

  document.getElementById("resume-button-2").onclick=()=>{
    window.open("https://drive.google.com/file/d/1lajjjme0ZohMa60ZicQrLqQEAEo4SCQK/view?usp=share_link");
  }
     
  
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.display= "block";
  }