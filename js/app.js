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
 * Define Global Variables
 * 
*/

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
let time1=performance.now();
let html='<li><a href="javascript:void(0);" class="icon" onclick="nav_responsive()"><i class="fa fa-bars"></i></a></li>';


// build the nav
(function () {
    let sections=document.querySelectorAll('section');
    for(var i=1;i<=sections.length;i++)
    {
        let nav_item=document.createElement('li');
        let nav_link=document.createElement('a');
        nav_link.appendChild(document.createTextNode('Section '+i));
        nav_link.classList.add('menu__link');
        nav_link.href=('#section'+i);
        nav_item.appendChild(nav_link);
        document.querySelector('#navbar__list').appendChild(nav_item);
    }
    document.querySelector('#navbar__list').innerHTML+=html;
})();


//responsive navbar
function nav_responsive() {
    const x = document.getElementById("navbar__list");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }


//btn click back to top
const btn=document.getElementById('btn_up');
btn.onclick=function(){
    document.documentElement.scrollTop= 0;
};


// Scroll to section on link click
let links=document.querySelectorAll('.menu__link');
let sections=document.querySelectorAll('section');
let sec_id='';
(function(){
    links.forEach(link => {
        link.addEventListener('click',function(e){
            links.forEach(li =>{
                li.classList.remove('active');
                li.classList.add('menu__link');
                // console.log(e.target.hash);
                sec_id=document.querySelector(e.target.hash);
            });
            sections.forEach(sec =>{
                sec.classList.remove('your-active-class');
            });
            
            this.classList.add('active');
            this.classList.remove('menu__link');
            sec_id.classList.add('your-active-class');
        });
    });    
})();



// var viewportHeight = window.innerHeight;
// var scrollTop =0;
// var distance, percentage ;

// Add class 'active' to section when near top of viewport
window.onscroll=function(){ 
    // scrollTop = window.scrollY
    sections.forEach(change_active);
    if(document.documentElement.scrollTop>20)
    {
        btn.style.display = "block";
    }
    else{
        btn.style.display = "none";
    }
};
let time2=performance.now();
console.log(time2-time1);
// function change_active(sec,index)
// {
//     var elementOffsetTop = sec.offsetTop;
//     var elementHeight = sec.offsetHeight;
//     distance = scrollTop + viewportHeight - elementOffsetTop;
//     percentage = Math.round(distance / ((viewportHeight + elementHeight) / 100));
//     if(percentage>40 && percentage<90 )
//     {
//         sec.classList.add('your-active-class');
//         console.log(index);
//         links[index].classList.remove('menu__link');
//         links[index].classList.add('active');
        
//         // return Math.min(100, Math.max(0, percentage));
//     }
//     else{
//         sec.classList.remove('your-active-class');
//         links[index].classList.remove('active');
//         links[index].classList.add('menu__link');
//         // return Math.min(100, Math.max(0, percentage));
//     }
// }

function change_active(index)
{
    sections.forEach(sec=>{
        var rect=sec.getBoundingClientRect();
        if(rect.top>0 && rect.top<300)
        {
            sec.classList.add('your-active-class');
            // console.log(sec.getAttribute('id'));
            for(var i=0;i<links.length;i++)
            {
                if('#'+sec.getAttribute('id')==links[i].hash)
                {
                    links[i].classList.remove('menu__link');
                    links[i].classList.add('active');
                }
            }
        }
        else{
            sec.classList.remove('your-active-class');
            for(var i=0;i<links.length;i++)
            {
                if('#'+sec.getAttribute('id')==links[i].hash)
                {
                    links[i].classList.remove('active');
                    links[i].classList.add('menu__link');
                }
            }
        }
        // console.log(rect.top);
    });
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Set sections as active


