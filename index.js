const sideBar = document.getElementById("sideBar");
const sideNavBar = document.getElementById("sideNavBar");
const toggleBtn = document.getElementById("toggleBtn");
const toggleMobileNavBar = document.getElementById("toggleMobileNavBar");
const currTool = document.getElementById("currTool");

const toggleSideBar = (e) => {
    let width = sideBar.style.width;
    if (width == "55px") {
        sideBar.style.width = "250px";
        sideBar.classList.remove("closeText");
    }
    else {
        sideBar.style.width = "55px";
        sideBar.classList.add("closeText");
    }
}

const toggleMobileSideBar = (e) => {
    let width = sideNavBar.style.width;
    if (width == "0px") {
        sideNavBar.style.width = "250px";
        toggleMobileNavBar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
    else {
        sideNavBar.style.width = "0px";
        toggleMobileNavBar.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
}

toggleBtn.addEventListener('click', toggleSideBar);
toggleMobileNavBar.addEventListener('click', toggleMobileSideBar);

const tools = document.querySelectorAll(".tool");

Array.from(tools).forEach((element)=>{
    element.addEventListener('click',()=>{
        currTool.innerText = element.querySelector('h3').innerText;
    })
})



textarea = document.querySelector("#userInput");
placeholderBox = document.getElementById("placeholderBox");
pastePlaceholder = document.getElementById("pastePlaceholder");
tryPlaceholder = document.getElementById("tryPlaceholder");
clearText = document.getElementById("clearText");

counter = document.getElementById("counter");


textarea.addEventListener('input', autoResize, false);
function autoResize() {
    this.style.height = 'auto';
    placeholderBox.style.display = textarea.value.length ? 'none'  : 'flex';
    this.style.height = this.scrollHeight + 'px';
    const uploadElement = '<i class="fa-solid fa-cloud-arrow-up" style="color: #ccc;"></i>    <h3>Upload Doc</h3>' ;
    const countElement = `<h3>${textarea.value.split(' ').length} Word </h3>`;
    
    counter.innerHTML = textarea.value.length ? countElement : uploadElement;
}

pastePlaceholder.addEventListener('click', function() {
    navigator.clipboard.readText()
        .then(function(clipboardText) {
            textarea.value = clipboardText;
            placeholderBox.style.display = textarea.value.length ? 'none'  : 'flex';
            const uploadElement = '<i class="fa-solid fa-cloud-arrow-up" style="color: #ccc;"></i>    <h3>Upload Doc</h3>' ;
            const countElement = `<h3>${textarea.value.split(' ').length} Word </h3>`;
            
            counter.innerHTML = textarea.value.length ? countElement : uploadElement;
        })
        .catch(function(err) {
            console.error('Unable to read clipboard data', err);
        });
});

tryPlaceholder.addEventListener('click',()=>{
    let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium necessitatibus consectetur voluptatem possimus dignissimos est culpa cupiditate impedit provident?";
    textarea.value = text;
    placeholderBox.style.display = textarea.value.length ? 'none'  : 'flex';
    const uploadElement = '<i class="fa-solid fa-cloud-arrow-up" style="color: #ccc;"></i>    <h3>Upload Doc</h3>' ;
    const countElement = `<h3>${textarea.value.split(' ').length} Word </h3>`;
    
    counter.innerHTML = textarea.value.length ? countElement : uploadElement;
});

clearText.addEventListener('click',()=>{
    textarea.value = "";
    placeholderBox.style.display = textarea.value.length ? 'none'  : 'flex';
    const uploadElement = '<i class="fa-solid fa-cloud-arrow-up" style="color: #ccc;"></i>    <h3>Upload Doc</h3>' ;
    const countElement = `<h3>${textarea.value.split(' ').length} Word </h3>`;
    
    counter.innerHTML = textarea.value.length ? countElement : uploadElement;
})



function btn() {
    let t = document.querySelector(".example").style.display;
    if(t == "none"){
        t = "block";
    }
    else{
        t = "none";
    }
    document.querySelector(".example").style.display = t;
}
