let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
    navbar.classList.toggle('open-menu')
    menu.classList.toggle('move')
};
window.onscroll = () => {
    navbar.classList.remove('open-menu')
    menu.classList.remove('move')
};

//Swiper
// var swiper = new document.querySelector("menu-icon");
// menu.onclick= () => {
//     menu.classList.toggle("move");
// };

var swiper = new swiper (".commentaires-content",{
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        deplay:5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
});

let nav = document.querySelector('nav')

window.addEventListener('scroll',() => {
nav.classList.toggle('nav-active', window.scrollY > 0 );
});

// Email JS

function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let envoyezbtn = document.querySelector(".envoyez-btn");

    envoyezbtn.addEventListener('click',function(e) {
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == "") {
          emptyerror();  
        } else {
            sendmail (name.value, email.value, msg.value);
            success();
            $('#contact-form').trigger("reset");
        }
    });
}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_hx9bb6w","template_yftc0e4",{
        to_name: name,
        from_name: email,
        message: msg,
        reply_to: email,
        });
}

function emptyerror() {
    Swal({
        title: "Erreur!",
        text: "les champs ne peuvent pas être vides!",
        icon: "error",
      });
}
function success() {
    Swal({
        title: "Message envoyé avec succes",
        text: "les champs ne peuvent pas être vides!",
        icon: "success",
      });
}