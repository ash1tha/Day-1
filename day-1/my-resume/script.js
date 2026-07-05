// Scroll animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});

// Active navbar

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=window.scrollY;
        const offset=section.offsetTop-150;
        const height=section.clientHeight;

        if(top>=offset && top<offset+height){
            current=section.id;
        }

    });

    navLinks.forEach(link=>{
        link.style.color="white";

        if(link.getAttribute("href")==="#"+current){
            link.style.color="#38bdf8";
        }
    });
    
});

const topBtn=document.getElementById("topBtn");

window.onscroll=()=>{
    if(window.scrollY>300)
        topBtn.style.display="block";
    else
        topBtn.style.display="none";
}

topBtn.onclick=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}