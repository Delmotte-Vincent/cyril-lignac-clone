const navigationBar = document.querySelector(".nav-bar");
const buttonReservation = document.querySelector(".reservation-button");

const offset = navigationBar.offsetTop;

window.addEventListener('scroll', () => {

    if (window.scrollY > offset) {
        navigationBar.classList.add('sticky');
        buttonReservation.classList.add('button-style');
   
    } else {
        navigationBar.classList.remove('sticky');
        buttonReservation.classList.remove('button-style');
    }
  });
  