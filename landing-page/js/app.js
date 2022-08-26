/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let sectionNav = document.querySelectorAll("section");
let NavTag = document.getElementById("navbar__list");
let sectionNavLength = sectionNav.length;
let sectionNavPosition = [];
let currentPosition = 0;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function scrollToSection(sectionID){
    window.scrollTo(0,sectionID);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
sectionNav.forEach((element,index) =>{
    let sectionName = element.getAttribute("data-nav");
    let toOffSection = element.offsetTop+30;
    let liTag = document.createElement("li");
    liTag.setAttribute("class","menu__link"+index);
    liTag.innerHTML = `<a onClick="scrollToSection(${toOffSection})">${sectionName}</a>`;
    NavTag.appendChild(liTag);
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

document.addEventListener("scroll",()=>{
    currentPosition = this.scrollY;
    sectionNavPosition=[];
    sectionNav.forEach((element)=>sectionNavPosition.push(element.getBoundingClientRect().top+50));

    let addIndex = sectionNavPosition.findIndex((element)=>element>0);
    for(let i = 0; i<sectionNavLength; ++i){
        if(addIndex===i){
            document.querySelector(".menu__link"+addIndex).classList.add("active");
            document.querySelector(`#section${addIndex+1}`).classList.add("current-active-class");
        }else{
            document.querySelector(".menu__link"+i).classList.remove("active");
            document.querySelector(`#section${i+1}`).removeAttribute("class");
        }
    }
});
