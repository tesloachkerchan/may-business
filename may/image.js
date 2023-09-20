const navLinks = document.querySelectorAll('.navbar-nav > li > a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navbarToggler.classList.add('collapsed');
    navbarCollapse.classList.remove('show');
  });
});


const images = [
  'backgroundcopy.jpg',
  'manager.jpg',
  'homeprinter.jpg'
];

const titles = [
  'May General Business',
  'General Manager Yohans Mekete',
  'May Printing and Advertising Office '
];

const descriptions = [
  'On Today We Wll See Tomorrow',
  'have a degree in Biomedical Engineering from Addis Ababa University. With over 5 years of working experience.',
  
];

let index = 0;

function changeBackground() {
  const background = document.querySelector('.background');
  background.style.backgroundImage = `url(images/${images[index]})`;

  const title = document.querySelector('#title');
  title.textContent = titles[index];

  const description = document.querySelector('#description');
  description.textContent = descriptions[index];

  index++;

  if (index === images.length) {
    index = 0;
  }
}
setInterval(changeBackground, 5000);

var testimonialContent1 = document.getElementById("testimonial-content1");
var testimonialContent2 = document.getElementById("testimonial-content2");
var testimonialContent3 = document.getElementById("testimonial-content3");
var testiImage1 = document.getElementById("testi-image1");
var testiImage2 = document.getElementById("testi-image2");
var testiImage3 = document.getElementById("testi-image3");

var currentTestimonial = 1;

setInterval(function(){
  if(currentTestimonial === 1){
    testimonialContent1.style.display = "none";
    testimonialContent2.style.display = "none";
    testimonialContent3.style.display = "block";
    testiImage1.style.display = "none";
    testiImage2.style.display = "none";
    testiImage3.style.display = "block";
    currentTestimonial = 2;
  } else if(currentTestimonial === 2){
    testimonialContent1.style.display = "none";
    testimonialContent2.style.display = "block";
    testimonialContent3.style.display = "none";
    testiImage1.style.display = "none";
    testiImage2.style.display = "block";
    testiImage3.style.display = "none";
    currentTestimonial = 3;
  } else {
    testimonialContent1.style.display = "block";
    testimonialContent2.style.display = "none";
    testimonialContent3.style.display = "none";
    testiImage1.style.display = "block";
    testiImage2.style.display = "none";
    testiImage3.style.display = "none";
    currentTestimonial = 1;
  }
}, 5000);



