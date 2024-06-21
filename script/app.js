
// * Start Show / Hide Nav bar """"""""""""""

let startScroll = window.scrollY;
// console.log(`start scrol est égal à : ${startScroll}`);

window.onscroll = function() {
    let currentScrolpas = window.scrollY;

    if(startScroll > currentScrolpas) {
        document.querySelector('.nav-container').style.top = "0";
        
    }else {
        // document.getElementsByClassName('nav-container').style.top = '-100px';
        document.querySelector('.nav-container').style.top = '-100px';
    }
    
    startScroll = currentScrolpas;
    console.log("La position courante est égale à : " +  Math.floor(currentScrolpas));
    
}

// console.log("La position de départ est égale à : " +  startScroll);


//  End Show / Hide Nav bar """"""""""""""

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

console.log(educModal);
console.log(educTriger);

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