// anime champ formulaire ---------------------

const inputs = document.querySelectorAll('.field-anime');

for (let i = 0; i < inputs.length; i++) {
    
    let field = inputs[i];
    console.log(field);

    field.addEventListener('input', (e) => {

        if(e.target.value != ""){
            e.target.parentNode.classList.add('animation');
        } else if (e.target.value == "") {
            e.target.parentNode.classList.remove('animation');
        }

    })

}



// Toggle liste choix -------------------------------------

const toggleListChoix = document.querySelector('.toggle-options');
const multiSelect = document.querySelector('.multi-select');
const boxChoix = document.querySelector('.choix-activites');


toggleListChoix.addEventListener('click', function(){
    multiSelect.classList.toggle('hidden');
});


// Sélectionner un seul choix pour le type sexe

// const sexeOption = document.querySelectorAll("#sex-option");

// sexeOption.forEach(checkOption => {
//     checkOption.addEventListener('change', () => {
//         sexeOption.forEach(otherOption => {
//             if (otherOption != checkOption) {
//                 otherOption.checked= false;
//             }
//         })
//     });
// })

// Sélectionner une seule activitée

// const options = document.querySelectorAll("#option1");

// options.forEach(option => {
//     option.addEventListener('change', () => {
//         options.forEach(otherOption => {
//             if (otherOption != option) {
//                 otherOption.checked= false;
//             }
//         })
//     });
// })


// Sélectionner une seule activitée

// const enfOptions = document.querySelector('.enf-option');

// enfOptions.forEach(option => {
//     option.addEventListener('change', () => {
//         enfOptions.forEach(otherOption => {
//             if(otherOption != option) {
//                 otherOption.checked = false;
//             }
//         })
//     });
// })

// Selection unique et calcul de cotisation

document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.enf-option');
    const tarifElement = document.getElementById('tarif-value');

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                // Uncheck all other checkboxes
                checkboxes.forEach((otherCheckbox) => {
                    if (otherCheckbox !== checkbox) {
                        otherCheckbox.checked = false;
                    }
                });
                // Set the tarif value to 230
                tarifElement.textContent = '230 €';
            } else {
                // Reset the tarif value to 0 when no checkbox is selected
                tarifElement.textContent = '0 €';
            }
        });
    });
});




// affichage modale instruction cheque

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
