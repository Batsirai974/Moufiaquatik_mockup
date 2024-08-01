// MARK: anime champ formulaire ---------------------

const inputs = document.querySelectorAll('.field-anime');

for (let i = 0; i < inputs.length; i++) {
    
    let field = inputs[i];
    // console.log(field);

    field.addEventListener('input', (e) => {

        if(e.target.value != ""){
            e.target.parentNode.classList.add('animation');
        } else if (e.target.value == "") {
            e.target.parentNode.classList.remove('animation');
        }

    })

}



// MARK: Toggle liste choix -------------------------------------

const toggleListChoix = document.querySelector('.toggle-options');
const multiSelect = document.querySelector('.multi-select');
const boxChoix = document.querySelector('.choix-activites');


toggleListChoix.addEventListener('click', function(){
    multiSelect.classList.toggle('hidden');
});





// MARK: Calcul cotisation et parametre selection

const activiteA = document.querySelector('.activite-A');
const blocChoix = document.querySelector('.multi-select')
const checkboxes = blocChoix.querySelectorAll('input[type="checkbox"]');
const tarifElement = document.getElementById('tarif-value');

activiteA.addEventListener('click', (e) => {
  if (e.target.type === 'checkbox' && e.target.id !== 'option5') {
    const checkboxes = activiteA.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      if (checkbox !== e.target) {
        checkbox.checked = false;
      }
    });
  }
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    let tarif = 0;
    let selectedCheckboxes = [];
    let activiteACount = 0;
    let activiteBCount = 0;
    let option5Selected = false;

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedCheckboxes.push(checkbox);
        if (checkbox.parentNode.parentNode.classList.contains('activite-A')) {
          activiteACount++;
        } else {
          activiteBCount++;
        }
        if (checkbox.id === 'option5') {
          option5Selected = true;
        }
      }
    });

    const totalSelected = selectedCheckboxes.length;

    if (totalSelected === 1) {
      tarif = parseInt(selectedCheckboxes[0].dataset.tarif);
    } else if (totalSelected === 2) {
      if (option5Selected) {
        tarif = selectedCheckboxes.reduce((sum, checkbox) => sum + parseInt(checkbox.dataset.tarif), 0);
      } else {
        tarif = 350;
      }
    } else if (totalSelected === 3) {
      if (option5Selected) {
        tarif = 480;
      } else {
        tarif = 580;
      }
    } else if (totalSelected === 4 && activiteACount === 1 && activiteBCount === 3) {
      tarif = 710;
    }

    tarifElement.textContent = `${tarif} €`;
  });
});

// MARK: Modale

// Affichage modale instruction aqua-bike
const checkboxAquabike = document.querySelector('.option-bike');
const modale = document.querySelector('.modale-aqua-bike');
const closeAquabikeBtn = document.querySelector('.closeModal');

// Afficher ou masquer la modale
function toggleModale() {
    if (checkboxAquabike.checked) {
        modale.style.display = 'block';
    } else {
        modale.style.display = 'none'; 
    }
}

// Écouter les changements sur la checkbox
checkboxAquabike.addEventListener('change', toggleModale);

// Écouter le clic sur le bouton "Fermer" pour masquer la modale
closeAquabikeBtn.addEventListener('click', (e)=>{
  e.preventDefault();

  modale.style.display = 'none';
});




// Affichage modale instruction cheque
const blocPaiement = document.querySelector(".paiement-bloc")
const checkboxes_p = blocPaiement.querySelectorAll('input[type="checkbox"]');
const modal = document.getElementById('myModal');
const closeCheqBtn = document.querySelector('.closeChequeBtn');

checkboxes_p.forEach((checkbox) => {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      // Deselect all other checkboxes_p
      checkboxes_p.forEach((otherCheckbox) => {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      });
      // Show modal if .cheque-option is checked
      if (this.classList.contains('cheque-option')) {
        modal.style.display = 'block';
      } else {
        modal.style.display = 'none';
      }
    } else {
      // If the checkbox is unchecked, hide the modal
      modal.style.display = 'none';
    }
  });
});

// Écouter le clic sur le bouton "Fermer" pour masquer la modale
  closeCheqBtn.addEventListener('click', (e)=>{
    e.preventDefault();
  modal.style.display = 'none';
});
