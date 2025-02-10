// Commented the countdown timer code as it is not required for this project


// Target date: 25th January 2025
// const targetDate = new Date("2025-01-25T09:00:00");

// function updateCountdown() {
//   const currentDate = new Date();
//   const timeDifference = targetDate - currentDate; 
//     if (timeDifference <= 0) {
//         document.getElementById("days").textContent = "00";
//         document.getElementById("hours").textContent = "00";
//         document.getElementById("minutes").textContent = "00";
//         document.getElementById("seconds").textContent = "00";
//         return;
//     }
//     const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//     document.getElementById("days").textContent = days.toString().padStart(2, "0");
//     document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
//     document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
//     document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
// }

// setInterval(updateCountdown, 1000);
// updateCountdown();

//loader animation
var loader = document.querySelector("#mainloader");

setTimeout(() => {
  loader.style.top = "-100%";
}, 3650);

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


//   let url = "https://script.google.com/macros/s/AKfycbzWMuEajUXjNABzWHesGEzyqVntxkBDaCGqtwAMOmVxqpd2WNJBO-2rQ7HFb6YOyHwb4w/exec";
//   let form = document.querySelector('#form');
//   form.addEventListener("submit", (e) => {
//     let d = new FormData(form);
//     fetch(url, {
//       method: "POST",
//       body: d
//     }).then((res) => res.text())
//     .then((finalRes) => {
//       console.log(finalRes);
//       // Show a success message in a popup
//       alert("Your message has been successfully submitted! We will get back to you soon.");
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//       alert("Something went wrong. Please try again.");
//     });

//     e.preventDefault();
//   });


let url = "https://script.google.com/macros/s/AKfycbzWMuEajUXjNABzWHesGEzyqVntxkBDaCGqtwAMOmVxqpd2WNJBO-2rQ7HFb6YOyHwb4w/exec";
  let form = document.querySelector('#form');
  form.addEventListener("submit", (e) => {
    let d = new FormData(form);
    fetch(url, {
      method: "POST",
      body: d
    }).then((res) => res.text())
    .then((finalRes) => {
      console.log(finalRes);
      // Trigger Bootstrap modal popup
      let myModal = new bootstrap.Modal(document.getElementById('contactModal'));
      myModal.show();
    })
    .catch((error) => {
      console.error('Error:', error);
      alert("Something went wrong. Please try again.");
    });

    e.preventDefault();
  });

  // document.addEventListener('DOMContentLoaded', () => {
  //   const container = document.querySelector('.container');
  //   let isMouseDown = false;
  //   let startX;
  //   let scrollLeft;
  //   let rafId = null;
  
  //   function startDragging(e) {
  //     isMouseDown = true;
  //     startX = e.pageX - container.offsetLeft;
  //     scrollLeft = container.scrollLeft;
  //     cancelAnimationFrame(rafId);
  //   }
  
  //   function stopDragging() {
  //     isMouseDown = false;
  //   }
  
  //   function performDrag(e) {
  //     if (!isMouseDown) return;
  //     e.preventDefault();
  //     const x = e.pageX - container.offsetLeft;
  //     const walk = (x - startX) * 2;
      
  //     rafId = requestAnimationFrame(() => {
  //       container.scrollLeft = scrollLeft - walk;
  //     });
  //   }
  
  //   // Desktop Events
  //   container.addEventListener('mousedown', startDragging);
  //   container.addEventListener('mouseleave', stopDragging);
  //   container.addEventListener('mouseup', stopDragging);
  //   container.addEventListener('mousemove', performDrag);
  
  //   // Touch Events
  //   container.addEventListener('touchstart', (e) => {
  //     startDragging(e.touches[0]);
  //   });
    
  //   container.addEventListener('touchend', stopDragging);
    
  //   container.addEventListener('touchmove', (e) => {
  //     performDrag(e.touches[0]);
  //   });
  
  //   // Smooth Scroll with Mouse Wheel
  //   container.addEventListener('wheel', (e) => {
  //     e.preventDefault();
      
  //     rafId = requestAnimationFrame(() => {
  //       container.scrollLeft += e.deltaY;
  //     });
  //   }, { passive: false });
  
  //   // Intersection Observer for lazy loading images
  //   const lazyLoadImages = () => {
  //     const imageObserver = new IntersectionObserver((entries, observer) => {
  //       entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //           const block = entry.target;
  //           const className = block.className.split(' ')[1];
  //           block.style.backgroundImage = `url(/images/${className.split('-')[1]}.jpg)`;
  //           observer.unobserve(block);
  //         }
  //       });
  //     });
  
  //     document.querySelectorAll('.block').forEach(block => {
  //       imageObserver.observe(block);
  //     });
  //   };
  
  //   lazyLoadImages();
  // });