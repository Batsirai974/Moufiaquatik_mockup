
// * Start Show / Hide Nav bar """"""""""""""

// let startScroll = window.scrollY;

// window.onscroll = function() {
//     let currentScrolpas = window.scrollY;

//             if(startScroll > currentScrolpas) {
//                 document.querySelector('.nav-container').style.top = "0";
                
//             }else {
//                 document.querySelector('.nav-container').style.top = '-100px';
//             }
            
//             startScroll = currentScrolpas;
    
// }

// test 01

// let navbar = document.querySelector('.nav-container');
// let startScroll = 0;

// window.onscroll = function() {
//   let currentScroll = window.scrollY;
//   let screenWidth = window.innerWidth;

//   if (screenWidth >= 940) {
//     // Si la largeur de l'écran est supérieure à 940px, nous appliquons le comportement de disparition de la navbar
//     if (startScroll > currentScroll) {
//       navbar.style.top = "0";
//     } else {
//       navbar.style.top = '-100px';
//     }
//   } else {
//     // Si la largeur de l'écran est inférieure ou égale à 940px, nous laissons la navbar visible
//     navbar.style.top = "0";
//   }

//   startScroll = currentScroll;
// }

// test 02 laisse la nav visible en small mais inactive fonctionnalite en big

// const navbar = document.querySelector('.nav-container');

// const screenWidth = window.innerWidth;
// console.log(screenWidth);
// window.addEventListener('resize', () => {
//   if (screenWidth <= 320) {
//     navbar.classList.remove('hidden');
//     navbar.style.position = 'fixed';
//     navbar.style.top = '0';
//   } else {
//   }
// });

// test 03

let startScroll = window.scrollY;

window.onscroll = function() {
  let currentScroll = window.scrollY;
  let screenWidth = window.innerWidth;

  if (screenWidth <= 430) {
    // Lorsque la largeur de l'écran est de 320px ou moins, afficher la barre de navigation et désactiver l'effet de défilement
    document.querySelector('.nav-container').style.top = "0";
    return; // Sortir de la fonction pour empêcher l'effet de défilement
  }

  if (startScroll > currentScroll) {
    document.querySelector('.nav-container').style.top = "0";
  } else {
    document.querySelector('.nav-container').style.top = '-100px';
  }

  startScroll = currentScroll;
}


//  End Show / Hide Nav bar """"""""""""""

//   Start anime hamburger  """""""""""""""""
const hamburgerToggler = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.list-items-nav');

const toggleNav = () => {
    hamburgerToggler.classList.toggle("open");

    const ariaToggle = hamburgerToggler.getAttribute('aria-expanded') === 'true'? 'false': 'true';
    hamburgerToggler.setAttribute('aria-expanded', ariaToggle)
    navLinksContainer.classList.toggle("open");
}

hamburgerToggler.addEventListener("click", toggleNav);
new ResizeObserver(entries => {
    if(entries[0].contentRect.width <= 900){
        navLinksContainer.style.transition = "transform 0.3s ease-out"
    } else {
        navLinksContainer.style.transition = "none"
    }
}).observe(document.body)

//   End anime hamburger  """""""""""""""""


// Animation texte pass Sport et pass loisir
setTimeout(() => {
    document.querySelector('.pass-loisir-container').classList.add('animate');
  }, 3502); // ajouter la classe animate après 1.5 seconde







// *~~~~~~~~~~~~~~ Start Card """"""""""""""
const cards = document.querySelectorAll('.card');

// Désactive la fonction "voir plus" pour les textes dont la hauteur est inférieure à la hauteur minimale visible d'un texte au chargement de la page.

window.onload = function() {
    cards.forEach((card) => {
        let seeMoreBtn = card.querySelector(".see-more-btn");
        let textContent = card.querySelector('.card-content .text-card');

        if(textContent.scrollHeight == textContent.clientHeight) {
            seeMoreBtn.style.display = "none";
            textContent.style.height = "fit-content";
        }
        else{
            card.classList.add("gradient");
        }
    });
}

// ---function: Pour plus d'informations, cliquez sur le bouton "Voir plus" de chaque carte.

cards.forEach((card) => {
    let seeMoreBtn = card.querySelector(".see-more-btn");
    let textContent = card.querySelector('.card-content .text-card');

    // console.log(seeMoreBtn);
    // console.log(textContent);
    
    seeMoreBtn.addEventListener("click", ()=>{
        card.classList.toggle("active");
        card.classList.toggle("gradient");

        if(card.classList.contains('active')) {
            seeMoreBtn.innerHTML = "Voir moins";
            textContent.style.height = textContent.scrollHeight + "px";
        }
        else{
            seeMoreBtn.innerHTML = "Voir plus...";
            textContent.style.height = "100px";
                       
        }
    })
});
// |||||||||||||||||||||| End Card |||||||||||||||||||||||||||||||||

// * Start -----------  Informations modale - -----------

const informationModale = document.querySelector('.information-modale-container');
const informationTrigger = document.querySelectorAll('.information-toggle');

informationTrigger.forEach(trigger => trigger.addEventListener('click', informationToggle));

function informationToggle() {
    informationModale.classList.toggle("active");
}

// * Start -----------  Tarifs modale - -----------

const tarifsModale = document.querySelector('.tarifs-modal-container');
const tarifsJAModale = document.querySelector('.jardin-aqua-tarif-niv1-container active');
const tarifsTrigger = document.querySelectorAll('.tarifs-toggle');

tarifsTrigger.forEach(triger => triger.addEventListener('click', toggleTarifs));

function toggleTarifs() {
    tarifsModale.classList.toggle("active");
    tarifsJAModale.classList.toggle("active");
}



// * Start -----------  About modale - -----------

const aboutModal = document.querySelector('.about-modal_container');
const aboutTriger = document.querySelectorAll('.about-toggle');
// console.log(aboutModal);
// console.log(aboutTriger);

aboutTriger.forEach(triger => triger.addEventListener('click', toggleModal));

function toggleModal() {
    aboutModal.classList.toggle('active')
}

//  END -----------  About modale - -----------

// * start -------------  educ modale  -------------------------------------

// for toggle
const educModal = document.querySelector('.educ-modale-container');
const educTriger = document.querySelectorAll('.educ-toggle');

// console.log(educModal);
// console.log(educTriger);

educTriger.forEach(triger => triger.addEventListener('click', toggleEducModale));

function toggleEducModale() {
    educModal.classList.toggle('active')
}

// For effect
//  Javascript for 3d effects and rotation effect on each card  20.53

const educCards = document.querySelectorAll('.card-body');

educCards.forEach((card) => {
    // rotate each card on mouvement
    card.addEventListener('mousemove', (e) => {
        let cardInnerHeight = card.clientHeight;
        let cardInnerWidth = card.clientWidth;

        //  console.log("Inner height" + cardInnerHeight);
        //  console.log("Inner width" + cardInnerWidth);

        let rect = card.getBoundingClientRect();
        let cardXposition = e.clientX - rect.left;  // x position within the element.
        let cardYposition = e.clientY - rect.top;  // Y position within the element.

        // console.log("card Xposition" + cardXposition);
        // console.log("card Yposition" + cardYposition);

        let rotateSpeed = 25; // value to change rotate speed.
        
        // you can adjust xCustom and yCustom value to center the cursor position with the 3d effect rotate angle when your card width and hight sizes and changed.
        let xCustom = 2.5;
        let yCustom = 1.25;

        let x = (cardInnerHeight / xCustom - cardXposition) / rotateSpeed;
        let y = (cardInnerWidth / yCustom - cardYposition) / rotateSpeed;

        card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
    });

    // card elements 3d effects on mouseover
    const cardFigure = card.querySelector(".card-figure");
    const cardName = card.querySelector(".card-name");
    const cardDescription = card.querySelector(".card-description");
    const cardMedia = card.querySelector(".card-media");

    card.addEventListener("mouseover", ()=> {
        cardFigure.style.transform = "translate3d(0, 0, 150px)";
        cardName.style.transform = "translate3d(0, 0, 180px)";
        cardDescription.style.transform = "translate3d(0, 0, 190px)";
        // cardMedia.style.transform = "translate3d(0, 0, 140px)";
        card.style.transition = "none";

    });

    // remove card rotation effect and 3d effect on mouseout
    card.addEventListener("mouseout", ()=> {
        cardFigure.style.transform = "translate3d(0, 0, 0)";
        cardName.style.transform = "translate3d(0, 0, 0)";
        cardDescription.style.transform = "translate3d(0, 0, 0)";
        // cardMedia.style.transform = "translate3d(0, 0, 0)";
        card.style.transform = "rotateY(0deg) rotateX(0deg)";
        card.style.transition = "transform .5s ease";

    });
});

//  END -----------  Educ modale - -----------


// START ------------ RGPD Modale -----------------------
const rgpdModale = document.querySelector('.rgpd-modal-container');
const rgpdTriger = document.querySelectorAll('.rpgd-toggle');

rgpdTriger.forEach(triger => triger.addEventListener('click', toggleRgpdModale));

function toggleRgpdModale(){
    rgpdModale.classList.toggle("active");
}



// END ------------ RGPD Modale -----------------------

// Start contact modale -----------------------------

const contactModale = document.querySelector('.contact-modale-container');
const contactTriger = document.querySelectorAll('.contact-toggle')

contactTriger.forEach(triger => triger.addEventListener('click', toggleContactModale));

function toggleContactModale() {
    contactModale.classList.toggle("active");
}

// End contact modale -----------------------------


// masquer le menu lorsque l'on click sur un lien
// version 01
// const menu = document.querySelector('.list-items-nav');
// const links = menu.querySelectorAll('a');
// const clubToggle = document.querySelector('.club-toggle');
// const sousLinks = document.querySelectorAll('.sous-list-club a');

// links.forEach(link => {
//     link.addEventListener('click', (event) => {
        // ne pas fermer le menu si le lien clicque est "le club"
        // if(link === clubToggle) {
        //     event.preventDefault();
            // Ajoute ou retire la classe active pour afficher / masquer la sous-liste
        //     link.parentElement.classList.toggle('active');
        // }else {
            // Fermer le menu pour tous les autres liens
//             menu.classList.remove('open');
//         }
//     });
// });

// Ajouter des écouteurs d'événements aux sous-liens
// sousLinks.forEach(link => {
//     link.addEventListener('click', () => {
//       menu.classList.remove('open');
//     });
//   });

// version 02
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.list-items-nav');
    const links = menu.querySelectorAll('a');
    const clubToggle = document.querySelector('.club-toggle');
    const sousLinks = document.querySelectorAll('.sous-list-club a');
  
    const toggleNav = () => {
      hamburgerToggler.classList.toggle('open');
      const ariaToggle = hamburgerToggler.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
      hamburgerToggler.setAttribute('aria-expanded', ariaToggle);
      menu.classList.toggle('open');
    };
  
    const closeNav = () => {
      if (hamburgerToggler.classList.contains('open')) {
        hamburgerToggler.classList.remove('open');
        hamburgerToggler.setAttribute('aria-expanded', 'false');
        menu.classList.remove('open');
      }
    };
  
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        // Si le lien cliqué est "Le Club", ne pas fermer le menu
        if (link === clubToggle) {
          event.preventDefault();
          // Ajoute ou retire la classe active pour afficher/masquer la sous-liste
          link.parentElement.classList.toggle('active');
        } else {
          // Fermer le menu pour tous les autres liens
          closeNav();
        }
      });
    });
  
    // Ajouter des écouteurs d'événements aux sous-liens
    sousLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeNav();
      });
    });
  });
  