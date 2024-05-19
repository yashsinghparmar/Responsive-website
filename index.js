
/*----------------navbar toggle-----------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('fa-x');
	navbar.classList.toggle('active');
};

/*----------------Scroll bar-----------------*/






let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY; // corrected typo: windowcrolly to window.scrollY
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); // corrected typo: geyAttribute to getAttribute

        if(top >= offset && top < offset + height) {
            navlinks.forEach(link => { // corrected typo: links to link
                link.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    };
});




/*----------------Sticky nav bar-----------------*/

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('fa-x');
navbar.classList.remove('active');

};


/*----------------scroll reveal js-----------------*/

ScrollReveal({ 
	distance:'80px', 
	duration:2000,
	delay:200
});

ScrollReveal().reveal('.home-content, .heading, .home-content h1, .about-img', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-box, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*----------------multiple text js-----------------*/


const typed = new Typed('.multiple-text', 
{strings:['Frontend Developer', 'Frontend Developer', 'Frontend Developer'],
typeSpeed:100,
backSpeed:100,
backDelay:1000,
loop:true
});


/*----------------download js-----------------*/

function downloadFile() {
  window.open("YashResume.pdf")
}



/*----------------popoup js-----------------*/

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function myFunction1() {
  var popup1 = document.getElementById("myPopup1");
  popup1.classList.toggle("show");
}

function myFunction2() {
  var popup2 = document.getElementById("myPopup2");
  popup2.classList.toggle("show");
}






