// -----------------------------------------------------------------NAV_BAR-js----------------------------------------------------------------
const navSlider = () => {
    const burger=document.querySelector('.burger');
    const navLinks=document.querySelector('.nav-links');
    const AllNavLinks=document.querySelectorAll('.nav-links li');


    burger.addEventListener('click',()=>{
        // fade-in-nav
        navLinks.classList.toggle('nav-active');


        // popUp-links
        AllNavLinks.forEach((link , index) => {
            if(link.style.animation){
                link.style.animation='';
            }
            else{
                link.style.animation=`navlinksIn 0.5 ease forwards ${index/2 + 1}s`;
            }
        });
        // burger animation
        burger.classList.toggle('togle');

    });

        
    

    
}

navSlider();

// -----------------------------------------------------------------NAV_BAR-js(end)----------------------------------------------------------------


