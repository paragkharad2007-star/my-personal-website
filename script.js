// alert("You are entering  into the Futurstic Website!");
const openSidebarBtn = document.getElementById("openSidebarBtn");
const closeSidebarBtn = document.getElementById("closeSidebarBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// Toggle sidebar when menu button is clicked
openSidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
  openSidebarBtn.style.display = "none";
});

// Close button inside sidebar
if (closeSidebarBtn) {
  closeSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    openSidebarBtn.style.display = "block";
  });
}

// Close when clicking on overlay
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  openSidebarBtn.style.display = "block";
});




// ===== Live Clock + Date + Greeting =====
// function updateClock() {
//   const now = new Date();
//   const hours = now.getHours().toString().padStart(2, "0");
//   const minutes = now.getMinutes().toString().padStart(2, "0");
//   const seconds = now.getSeconds().toString().padStart(2, "0");
//   document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
//   document.getElementById("date").textContent = now.toDateString();

//   let greeting = "Hello!";
//   if (hours < 12) greeting = "Good Morning, User !";
//   else if (hours < 18) greeting = "Good Afternoon, User !";
//   else greeting = "Good Evening, User !";
//   document.getElementById("greeting").textContent = greeting;
// }
// setInterval(updateClock, 1000);
// updateClock();

// Typed.js effect
new Typed('#element', {
  strings: ['Web Developer.', 'Web Designer.', 'Java Programmer.', 'AI Enthusiast.'],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});



// Section switcher (future expansion)
function showSection(id) {
  document.querySelectorAll("main section").forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
}


  // Date
  // const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // const dayName = days[now.getDay()];
  // const monthName = months[now.getMonth()];
  // const dateStr = `${dayName}, ${now.getDate()} ${monthName} ${now.getFullYear()}`;
  // document.getElementById("date").textContent = dateStr;

  // Greeting
  

