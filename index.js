const sideBar = document.getElementById("sideBar");
const toggleBtn = document.getElementById("toggleBtn");
const version = document.getElementById("version");

const toggleSideBar = (e) => {
   let width = sideBar.style.width ; 
   if(width == "55px"){
    sideBar.style.width = "250px";
    version.style.display = "block";
}
else{
    sideBar.style.width = "55px";
    version.style.display = "none";
   }
}

toggleBtn.addEventListener('click',toggleSideBar);