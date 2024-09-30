
    // let lastScrollTop = 0;
    // const header = document.querySelector('.header');
    // header.classList.remove('hidden');
    // window.addEventListener('scroll', function() {
    //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     if (scrollTop > lastScrollTop) {
    //         // Scroll down
    //         header.classList.add('hidden');
    //     } else {
    //         // Scroll up
    //         header.classList.remove('hidden');
    //     }
    //     lastScrollTop = scrollTop;
    function Dropdown() {
      const dropdown=document.getElementById('drop-down-menu');
      if(dropdown.style.display==='flex'){
          dropdown.style.display='none';
      }else{
          dropdown.style.display='flex';
      }
  }
    // });

function sendinfo(){
const name=document.getElementById('name').value;
const email=document.getElementById('email').value;
const message=document.getElementById('message').value;
if(name==='' || email==='' || message===''){
    alert('Please fill in all fields');

}
else{
    console.log(name+' '+email+' '+message);
}

  
}

// const ModalOn=document.getElementsByClassName('buy-ticket-btn');
// ModalOn.onclick=function(event){
//     event.preventDefault();
//     const modal=document.getElementById('ticketmodal');
//     const openmodal=document.getElementById("modal-container");
//     modal.style.display='block';
//     openmodal.style.animation='SlideInOnTop .4s';
// };

// const modaloff=document.getElementById('close-modal-btn');
// modaloff.addEventListener('click',function(event){
//     event.preventDefault();
//     const modal=document.getElementById('ticketmodal');
//     const closemodal=document.getElementById("modal-container");
//     closemodal.style.animation='SlideOutOnTop .4s';
//     setTimeout(function(){
//         modal.style.display='none';
//     },200);

// });

function closeModal()
{
    const modal=document.getElementById('ticketmodal');
    const closemodal=document.getElementById("modal-container");
    closemodal.style.animation='SlideOutOnTop .4s';
    setTimeout(function(){
        modal.style.display='none';
    },200);
}


function openModal(){
    const modal=document.getElementById('ticketmodal');
    const openmodal=document.getElementById("modal-container");
    modal.style.display='block';
    openmodal.style.animation='SlideInOnTop .4s';
}

var modal = document.getElementById('ticketmodal');
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide-img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}



document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.1 // Trigger when 10% of the element is visible
  };

  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target); // Stop observing once the element is visible
          }
      });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  document.querySelectorAll(".lazy-load").forEach(element => {
      observer.observe(element);
  });
});